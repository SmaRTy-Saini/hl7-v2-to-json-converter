
function convertToJSON() {
    const raw = document.getElementById('hl7Input').value.trim();
    if (!raw) {
        document.getElementById('jsonOutput').textContent = 'Please paste an HL7 message.';
        return;
    }

    const lines = raw.split(/\r?\n/);
    const result = [];

    for (const line of lines) {
        if (!line.trim()) continue;
        const fields = line.split('|');
        const segment = fields.shift();
        result.push({
            segment: segment,
            fields: fields
        });
    }

    document.getElementById('jsonOutput').textContent = JSON.stringify(result, null, 2);
}
