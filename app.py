from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample data for demonstration purposes
registrations = [
    {"id": 1, "name": "John Doe", "event": "Tech Fest", "status": "Confirmed"},
    {"id": 2, "name": "Jane Smith", "event": "Cultural Festival", "status": "Pending"}
]

schedule = [
    {"time": "10:00 AM", "event": "Inauguration Ceremony", "location": "Main Hall"},
    {"time": "2:00 PM", "event": "Coding Hackathon", "location": "Lab 2"}
]

changes = [
    {"id": 1, "update": "Venue for the keynote speech has been changed to Hall B."},
    {"id": 2, "update": "Workshop on AI will now start at 1:30 PM."}
]

@app.route("/")
def dashboard():
    return render_template("dashboard.html", registrations=registrations, schedule=schedule, changes=changes)

@app.route("/add_change", methods=["POST"])
def add_change():
    new_change = request.form.get("new_change")
    changes.append({"id": len(changes) + 1, "update": new_change})
    return redirect(url_for("dashboard"))

if __name__ == "__main__":
    app.run(debug=True)

