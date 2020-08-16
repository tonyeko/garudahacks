# Backend

## How to Run

1. Install requirements
```
pip install -r requirements.txt
```
2. Install tesseract
```
On Linux
sudo apt update
sudo apt install tesseract-ocr
sudo apt install libtesseract-dev

On Mac
brew install tesseract

On Windows
download binary from https://github.com/UB-Mannheim/tesseract/wiki. 
then add pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files (x86)\\Tesseract-OCR\\tesseract.exe' to your script. (replace path of tesseract binary if necessary)
```

3. Add .flaskenv file
```
This file contains mongodb atlas credentials
contact me for get your credentials
```

4. Run the app
```
flask run
```

Note: You can use testcase in folder images