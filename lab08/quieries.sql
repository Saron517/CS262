-- Single-Table Queries

-- a) Retrieve a list of all the games, ordered by date with the most recent game coming first.
SELECT *
FROM Game
ORDER BY time DESC;

-- b) Retrieve all the games that occurred in the past week.
SELECT *
FROM Game
WHERE time >= CURRENT_DATE - INTERVAL '7 days';

-- c) Retrieve a list of players who have (non-NULL) names.
SELECT *
FROM Player
WHERE name IS NOT NULL;

-- d) Retrieve a list of IDs for players who have some game score larger than 2000.
SELECT player_id
FROM PlayerGame
WHERE score > 2000;

-- e) Retrieve a list of players who have GMail accounts.
SELECT *
FROM Player
WHERE email LIKE '%@gmail.com';

-- Multiple-Table Queries 

-- a0 Retrieve all “The King”’s game scores in decreasing order:
SELECT PlayerGame.score
FROM Player, PlayerGame
WHERE Player.ID = PlayerGame.playerID
  AND Player.name = 'The King'
ORDER BY PlayerGame.score DESC;

-- b) Retrieve the name of the winner of the game played on 2006-06-28 13:20:00:
SELECT Player.name
FROM Player, PlayerGame, Game
WHERE Player.ID = PlayerGame.playerID
  AND PlayerGame.gameID = Game.ID
  AND Game.time = '2006-06-28 13:20:00'
ORDER BY PlayerGame.score DESC
LIMIT 1;

-- c) 
it serves to prevent duplicate or reverse pairs when a table joins itself

-- d)
one good example can be when one wants to find all pairs of players who played in the same game, where each pair only appears once like finding potential rivalries among players