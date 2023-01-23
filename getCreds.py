import requests
import os


CLIENT_ID=os.getenv('CLIENT_ID')
SECRET_ID=os.getenv('SECRET_ID')
ACCESS_ID=os.getenv('ACCESS_ID')
OAUTH_ID=os.getenv('OAUTH_ID')

# print(ACCESS_ID)


headers = {'Authorization': 'Bearer '+ ACCESS_ID, 'Client-Id': CLIENT_ID}

def obtainAccessToken():
    global ACCESS_ID
    if(ACCESS_ID is None or ACCESS_ID == ""):
        pload = {'client_id' : CLIENT_ID, 'client_secret': SECRET_ID, 'grant_type': 'client_credentials'}
        headers = {'Content-type': 'application/x-www-form-urlencoded'}
        resp_json = requests.post('https://id.twitch.tv/oauth2/token', data = pload, headers = headers)
        resp_dict = resp_json.json()
        ACCESS_ID = resp_dict['access_token']
        os.environ['ACCESS_ID'] = ACCESS_ID
        print(ACCESS_ID)
    else:
        print("Already have inital token.")
    return

def getUserData():
    global headers
    resp_json = requests.get('https://api.twitch.tv/helix/users?login=kashimoto503', headers = headers)
    print(resp_json.text)

def getBroadcasterId(name = 'kashimoto503'):
    global headers
    resp_json = requests.get('https://api.twitch.tv/helix/users?login=kashimoto503', headers = headers)
    resp_dict = resp_json.json()
    print(resp_dict['data']['id'])
    return resp_dict['data']['id']

def getBroadcasterGoals():
    headers = {'Authorization': 'Bearer '+ OAUTH_ID, 'Client-Id': CLIENT_ID}
    resp_json = requests.get('https://api.twitch.tv/helix/goals?broadcaster_id=154876633', headers = headers)
    print(resp_json.text)



#obtainAccessToken();
# getUserData()
getBroadcasterGoals()


