
from flask import Flask, request
import requests
import os

app = Flask(__name__)
TOKEN = os.environ.get("TG_TOKEN")
CHAT_ID = os.environ.get("TG_CHAT_ID")

@app.route("/api/send-order", methods=["POST"])
def send_order():
    data = request.json
    text = f"🛒 Новый заказ:\n\n📦 {data['product']}\n👤 {data['name']}\n📞 {data['phone']}\n📍 {data['address']}"
    requests.get(f"https://api.telegram.org/bot{TOKEN}/sendMessage", params={
        "chat_id": CHAT_ID,
        "text": text
    })
    return {"ok": True}
