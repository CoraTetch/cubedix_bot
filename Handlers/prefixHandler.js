async function loadPrefix(client) {
    const { loadFiles } = require('../Functions/fileLoader');

    const ascii = require('ascii-table');
    const table = new ascii().setHeading('prefixCommands', 'Status');

    await client.prefix.clear();

    const Files = await loadFiles('CommandsPrefix');

    Files.forEach((file) => {
        const prefix = require(file);
        client.prefix.set(prefix.name, prefix);

        table.addRow(prefix.name, '🟩');
    });

    return console.log('▰▱▰▱▰▱▰▱▰▱▰▱ Cargados ▰▱▰▱▰▱▰▱▰▱▰▱.\n', table.toString());
}

module.exports = { loadPrefix };