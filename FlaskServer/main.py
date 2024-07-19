import requests

def scrape_leetcode_profile(username):
    url = "https://leetcode.com/graphql"

    query = """
    {
        matchedUser(username: "%s") {
            username
            submitStats: submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
            }
        }
    }
    """ % username

    headers = {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0"
    }

    response = requests.post(url, json={"query": query}, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to fetch profile data. Status code: {response.status_code}")
        return None

# Example usage
username = 'sounaknandi'
profile_data = scrape_leetcode_profile(username)

if profile_data:
    print(f"Profile data for {username}:")
    print(profile_data)
else:
    print("Failed to scrape profile data.")
