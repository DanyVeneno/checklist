export function exportJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'checklist.json';
  a.click();
  URL.revokeObjectURL(url);
}

export function exportCSV(categories) {
  const rows = [];
  rows.push(['category', 'item', 'checked'].join(','));
  categories.forEach(cat => {
    cat.items.forEach(it => rows.push([cat.name, it.name, it.checked ? '1' : '0'].join(',')));
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'checklist.csv';
  a.click();
  URL.revokeObjectURL(url);
}

export function exportChecklist(checkedItemsSet, getAllItemsFn, getProgressFn) {
  const checkedList = Array.from(checkedItemsSet);
  const uncheckedList = getAllItemsFn()
    .map(({ item }) => item)
    .filter(item => !checkedItemsSet.has(item));

  const content = `CHECKLIST DE BOTIQUÍN DE PRIMEROS AUXILIOS - GAMA STORE

ELEMENTOS COMPLETADOS (${checkedList.length}):
${checkedList.map(item => `✓ ${item}`).join('\n')}

ELEMENTOS PENDIENTES (${uncheckedList.length}):
${uncheckedList.map(item => `○ ${item}`).join('\n')}

Progreso: ${getProgressFn()}%
Generado: ${new Date().toLocaleString('es-ES')}
`;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `botiquin-checklist-${new Date().getTime()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
