import React, { useState } from 'react';
import './TeamDashboard.css'; // Import CSS file

const TeamDashboard = ({ user }) => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [testingInProgress, setTestingInProgress] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const [team1Move, setTeam1Move] = useState(null);
  const [team2Move, setTeam2Move] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  // Function to generate a move (Rock, Paper, or Scissors)
  const generateMove = () => {
    return Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
  };

  // Function to simulate a match between two teams
  const simulateMatch = (team1Move, team2Move) => {
    if (team1Move === team2Move) {
      return 'Tie'; // Both teams chose the same move
    } else if ((team1Move === 0 && team2Move === 2) || 
               (team1Move === 1 && team2Move === 0) || 
               (team1Move === 2 && team2Move === 1)) {
      return 'Team 1'; // Team 1 wins
    } else {
      return 'Team 2'; // Team 2 wins
    }
  };

  // Function to execute the submitted scripts and determine the match results
  const executeScripts = () => {
    if (selectedTeam) {
      setTestingInProgress(true);
      setMatchResult(null);
      const move1 = generateMove(); // Generate move for team 1 (current user)
      const move2 = generateMove(); // Generate move for team 2 (opponent)
      setTeam1Move(move1);
      setTeam2Move(move2);
      setTimeout(() => {
        const result = simulateMatch(move1, move2);
        setMatchResult(result);
        updateLeaderboard(result);
        setTestingInProgress(false);
        // Reset selected team, moves, and match result after testing
        setSelectedTeam(null);
        setTeam1Move(null);
        setTeam2Move(null);
      }, 3000); // Reset after 3 seconds for demonstration purposes
    } else {
      alert('Please select a team to test against.');
    }
  };

  // Function to update the leaderboard based on the match result
  const updateLeaderboard = (result) => {
    // Copy the current leaderboard
    const updatedLeaderboard = [...leaderboard];
    if (result === 'Team 1' || result === 'Team 2') {
      const winningTeam = result;
      const losingTeam = result === 'Team 1' ? 'Team 2' : 'Team 1';
      // Find the index of the winning team in the leaderboard
      const winningTeamIndex = updatedLeaderboard.findIndex(team => team.name === winningTeam);
      // Increment the wins for the winning team
      updatedLeaderboard[winningTeamIndex].wins++;
      // Find the index of the losing team in the leaderboard
      const losingTeamIndex = updatedLeaderboard.findIndex(team => team.name === losingTeam);
      // Increment the losses for the losing team
      updatedLeaderboard[losingTeamIndex].losses++;
    }
    // Sort the leaderboard based on wins (descending) and losses (ascending)
    updatedLeaderboard.sort((a, b) => b.wins - a.wins || a.losses - b.losses);
    // Update the state with the new leaderboard
    setLeaderboard(updatedLeaderboard);
  };

  // Function to handle team selection
  const handleTeamSelect = (teamId) => {
    setSelectedTeam(teamId);
  };

  // Function to create a new team (dummy function)
  const createTeam = () => {
    const newTeam = { id: teams.length + 1, name: `Team ${teams.length + 1}`, wins: 0, losses: 0 };
    setTeams([...teams, newTeam]);
    setLeaderboard([...leaderboard, newTeam]);
  };

  const joinTeam = (teamId) => {
    // Here, you would implement the logic to join the specified team.
    console.log(`Joining team ${teamId}`);
  };

  // Function to leave a team (dummy function)
const leaveTeam = (teamId) => {
  console.log(`Leaving team ${teamId}`);
};

  

 
  return (
    <div className="team-dashboard-container">
      <h2>Team Dashboard</h2>
      <div className="team-dashboard-left">
        <h2>Create New Team</h2>
        <button onClick={createTeam}>Create New Team</button>
        <ul>
          {teams.map(team => (
            <li key={team.id}>
              {team.name}
              <button onClick={() => joinTeam(team.id)}>Join</button>
              <button onClick={() => leaveTeam(team.id)}>Leave</button>
              <button onClick={() => handleTeamSelect(team.id)}>Select for Testing</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="team-dashboard-right">
        <h2>Test Team</h2>
        <div>
          <h3>Select Team to Test Against:</h3>
          <select value={selectedTeam} onChange={(e) => handleTeamSelect(parseInt(e.target.value))}>
            <option value="">Select a Team</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
          <button onClick={executeScripts} disabled={testingInProgress}>
            {testingInProgress ? 'Testing in Progress...' : 'Start Testing'}
          </button>
          {team1Move !== null && team2Move !== null && (
            <div className="moves-container">
              <p>Team 1 Move: {team1Move === 0 ? 'Rock' : team1Move === 1 ? 'Paper' : 'Scissors'}</p>
              <p>Team 2 Move: {team2Move === 0 ? 'Rock' : team2Move === 1 ? 'Paper' : 'Scissors'}</p>
            </div>
          )}
          {matchResult && <p>Match Result: {matchResult}</p>}
        </div>
      </div>
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(team => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamDashboard;

