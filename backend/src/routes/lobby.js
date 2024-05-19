import {fn} from '../modules/auth';
/** @typedef {import("fastify").FastifyInstance} FastifyInstance */

// TODO: move over to new system of handling sockets when I feel like it
let lobbies = new Map();

/**
 * 
 * @param {FastifyInstance} fastify 
 * @param {unknown} _ 
 * @param {() => void} done 
 */
export const wsRoutes = (fastify, _, done) => {
    fastify.get('/lobby/:lobby', { websocket: true }, (socket /* WebSocket */, req /* FastifyRequest */) => {
        try {
            const lobbyId = req.params.lobby_id;
            if (!lobbies.has(lobbyId)) {
                lobbies.set(lobbyId, new Set());
            }

            const lobby = lobbies.get(lobbyId)

            // Notify everyone in the lobby that someone has joined
            lobby.forEach(client => {
                if (client.readyState === 1) { // WebSocket.OPEN
                    client.send(JSON.stringify({ action: "join", user_id: Math.random() }));
                }
            });

            lobby.add(socket);


            socket.on('message', message => {
                // message.toString() === 'hi from client'
                socket.send('hi from wildcard route')
            });

            socket.on("close", () => {
                lobby.delete(socket);
                if (lobby.size === 0) {
                    lobbies.delete(lobbyId)
                }
            });
        } catch (e) {
            console.log(e);
        }
    });

    done();
};
