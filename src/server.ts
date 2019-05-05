import app from './app';
const PORT = 3001;

const server = app.listen(PORT, () => {
	console.log('Express server listening on port ' + PORT);
});

function handleExit(options: any, err: any) {
    console.log(options.test);
    if (options.cleanup) {
        const actions = [
            server.close
        ];

        actions.forEach((close, i) => {
        try {
            close(() => {
            if (i === actions.length - 1) {
                process.exit();
            }
          });
        } catch (err) {
            if (i === actions.length - 1) {
                process.exit();
            }
        }
      });
    }
    if (options.exit) {
        process.exit();
    }
}

process.on('exit', handleExit.bind(null, { cleanup: true, test: 'exit' }));
process.on('SIGINT', handleExit.bind(null, { exit: true, test: 'SIGINT' }));
process.on('SIGTERM', handleExit.bind(null, { exit: true, test: 'SIGTERM' }));
process.on('uncaughtException', handleExit.bind(null, { exit: true, test: 'uncaughtException' }));
