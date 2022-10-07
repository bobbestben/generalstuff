import requests

# Call the API by opening the URL and reading the data.
# xml response - out of scope
# response = requests.get("http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL")
# print(response)
# json response
response = requests.get("http://api.open-notify.org/astros.json")

# Decode the raw JSON data. - becomes dictionary
# if data is xml - cannot conver to json - will throw error
response_data = response.json()

# python is threading, hence no need async await
# https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

print(response_data)

# for key, ratings in response_data.items():
#     print("Key:", key, "Value:", ratings, "\n")