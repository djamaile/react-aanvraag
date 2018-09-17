import uuid from 'uuid';


export const addAankoop = (
    {
        description = '',
        note = '',
        totaal = 0,
        aangemaakt = 0
    } = {}
) => ({
    type: 'ADD_AANKOOP',
    aankoop: {
        id: uuid(),
        description,
        note,
        totaal,
        aangemaakt
    }
});

export const verwijderAankoop = ({ id } = {}) => ({
    type: 'VERWIJDER_AANKOOP',
    id
  });

export const editAankoop = (id, update) => ({
    type: 'EDIT_AANKOOP', 
    id, 
    update
});