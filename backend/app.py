from flask import Flask, jsonify
import os

app = Flask(__name__)

# Runtime variable: Team names can come from env var or DB.
# For demo, hardcoded Mumbai Marathon sponsor teams; make dynamic e.g., os.getenv('TEAMS', 'Team1,Team2')
TEAMS = [
    "Tata Consultancy Services"
]  # Can be overridden at runtime via env: export TEAMS="CustomTeam1,CustomTeam2" then split(',')

@app.route('/api/teams', methods=['GET'])
def get_teams():
    # Simulate runtime variability: If env var set, use it.
    custom_teams = os.getenv('CUSTOM_TEAMS')
    if custom_teams:
        teams = [team.strip() for team in custom_teams.split(',')]
    else:
        teams = TEAMS
    return jsonify([{"team": team} for team in teams])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
