import json

def load_data():
    with open('parking_data.json', 'r') as file:
        return json.load(file)

def save_data(data):
    with open('parking_data.json', 'w') as file:
        json.dump(data, file, indent=4)

def update_availability(lot_id, new_available_spaces):
    data = load_data()
    for lot in data:
        if lot['id'] == lot_id:
            lot['available_spaces'] = new_available_spaces
            print(f"Updated {lot['name']} to {new_available_spaces} available spaces.")
            break
    save_data(data)

# Example of usage
# Update Lot A to have 55 available spaces
update_availability(1, 55)
