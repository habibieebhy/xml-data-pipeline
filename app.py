from flask import Flask, render_template
import xml.etree.ElementTree as ET

app = Flask(__name__)

def parse_xml():
    tree = ET.parse('mock_data.xml')
    root = tree.getroot()
    vendors = []

    for vendor in root.findall(".//VENDOR"):
        name = vendor.find("NAME").text
        amount = vendor.find("AMOUNT").text
        vendors.append({"name": name, "amount": amount})
    
    return vendors

@app.route('/')
def home():
    data = parse_xml()
    return render_template("index.html", vendors=data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')