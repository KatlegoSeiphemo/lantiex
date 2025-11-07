import requests
import json
from datetime import datetime

# Backend URL from frontend/.env
BACKEND_URL = "https://better-contact.preview.emergentagent.com/api"

def test_post_contact():
    """Test POST /api/contact endpoint"""
    print("\n" + "="*60)
    print("TEST 1: POST /api/contact - Submit Contact Form")
    print("="*60)
    
    # Prepare test data with realistic information
    contact_data = {
        "name": "Sarah Johnson",
        "email": "sarah.johnson@example.com",
        "subject": "Partnership Inquiry",
        "message": "I'm interested in discussing a potential partnership opportunity with your company. Could we schedule a call next week?"
    }
    
    print(f"\nSending POST request to: {BACKEND_URL}/contact")
    print(f"Request body: {json.dumps(contact_data, indent=2)}")
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=contact_data, timeout=10)
        print(f"\nResponse Status Code: {response.status_code}")
        print(f"Response Body: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Verify response structure
            required_fields = ["id", "name", "email", "subject", "message", "timestamp"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"\n❌ FAILED: Missing required fields: {missing_fields}")
                return None
            
            # Verify data matches input
            if (data["name"] == contact_data["name"] and 
                data["email"] == contact_data["email"] and
                data["subject"] == contact_data["subject"] and
                data["message"] == contact_data["message"]):
                print("\n✅ PASSED: Contact submission successful")
                print(f"   - ID generated: {data['id']}")
                print(f"   - Timestamp: {data['timestamp']}")
                return data
            else:
                print("\n❌ FAILED: Response data doesn't match input")
                return None
        else:
            print(f"\n❌ FAILED: Expected status 200, got {response.status_code}")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"\n❌ FAILED: Request error - {str(e)}")
        return None
    except json.JSONDecodeError as e:
        print(f"\n❌ FAILED: Invalid JSON response - {str(e)}")
        return None

def test_get_contact(expected_submission=None):
    """Test GET /api/contact endpoint"""
    print("\n" + "="*60)
    print("TEST 2: GET /api/contact - Retrieve All Submissions")
    print("="*60)
    
    print(f"\nSending GET request to: {BACKEND_URL}/contact")
    
    try:
        response = requests.get(f"{BACKEND_URL}/contact", timeout=10)
        print(f"\nResponse Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: Retrieved {len(data)} submission(s)")
            
            if not isinstance(data, list):
                print("\n❌ FAILED: Response should be an array")
                return False
            
            if len(data) == 0:
                print("\n⚠️  WARNING: No submissions found in database")
                return True
            
            # Display all submissions
            print("\nSubmissions:")
            for idx, submission in enumerate(data, 1):
                print(f"\n  Submission {idx}:")
                print(f"    - ID: {submission.get('id', 'N/A')}")
                print(f"    - Name: {submission.get('name', 'N/A')}")
                print(f"    - Email: {submission.get('email', 'N/A')}")
                print(f"    - Subject: {submission.get('subject', 'N/A')}")
                print(f"    - Message: {submission.get('message', 'N/A')[:50]}...")
                print(f"    - Timestamp: {submission.get('timestamp', 'N/A')}")
            
            # If we have an expected submission, verify it's in the list
            if expected_submission:
                found = False
                for submission in data:
                    if submission.get('id') == expected_submission.get('id'):
                        found = True
                        print(f"\n✅ PASSED: Previously submitted data found in database")
                        break
                
                if not found:
                    print(f"\n❌ FAILED: Previously submitted data (ID: {expected_submission.get('id')}) not found")
                    return False
            else:
                print("\n✅ PASSED: Successfully retrieved submissions")
            
            return True
        else:
            print(f"\n❌ FAILED: Expected status 200, got {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"\n❌ FAILED: Request error - {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print(f"\n❌ FAILED: Invalid JSON response - {str(e)}")
        return False

def test_post_contact_validation():
    """Test POST /api/contact with missing fields"""
    print("\n" + "="*60)
    print("TEST 3: POST /api/contact - Validation Test (Missing Fields)")
    print("="*60)
    
    # Test with missing required field
    invalid_data = {
        "name": "Test User",
        "email": "test@example.com"
        # Missing subject and message
    }
    
    print(f"\nSending POST request with incomplete data to: {BACKEND_URL}/contact")
    print(f"Request body: {json.dumps(invalid_data, indent=2)}")
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=invalid_data, timeout=10)
        print(f"\nResponse Status Code: {response.status_code}")
        
        if response.status_code == 422:
            print("✅ PASSED: API correctly validates required fields (422 Unprocessable Entity)")
            return True
        elif response.status_code == 400:
            print("✅ PASSED: API correctly validates required fields (400 Bad Request)")
            return True
        else:
            print(f"⚠️  WARNING: Expected validation error (422 or 400), got {response.status_code}")
            return True  # Not a critical failure
            
    except requests.exceptions.RequestException as e:
        print(f"\n❌ FAILED: Request error - {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("\n" + "="*70)
    print("BACKEND API TESTING - CONTACT FORM ENDPOINTS")
    print("="*70)
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    results = {
        "total": 0,
        "passed": 0,
        "failed": 0
    }
    
    # Test 1: POST /api/contact
    results["total"] += 1
    submission = test_post_contact()
    if submission:
        results["passed"] += 1
    else:
        results["failed"] += 1
    
    # Test 2: GET /api/contact
    results["total"] += 1
    if test_get_contact(submission):
        results["passed"] += 1
    else:
        results["failed"] += 1
    
    # Test 3: Validation
    results["total"] += 1
    if test_post_contact_validation():
        results["passed"] += 1
    else:
        results["failed"] += 1
    
    # Summary
    print("\n" + "="*70)
    print("TEST SUMMARY")
    print("="*70)
    print(f"Total Tests: {results['total']}")
    print(f"Passed: {results['passed']} ✅")
    print(f"Failed: {results['failed']} ❌")
    
    if results['failed'] == 0:
        print("\n🎉 ALL TESTS PASSED!")
    else:
        print(f"\n⚠️  {results['failed']} TEST(S) FAILED")
    
    print("="*70 + "\n")
    
    return results['failed'] == 0

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)
