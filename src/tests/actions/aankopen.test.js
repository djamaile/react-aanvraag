import {addAankoop, editAankoop, verwijderAankoop} from "../../actions/aankopen";

test("Er moet een test aangemaakt worden met echte values", () => {
    const aanmaakData = {
        description : 'Dit is een product',
        note : 'Dit is een notite',
        totaal : 200,
        aangemaakt : 19000
    }
    const action = addAankoop(aanmaakData);
    expect(action).toEqual({
        type: 'ADD_AANKOOP',
        aankoop: {
            ...aanmaakData, 
            id: expect.any(String)
        }
    })
});

test("Kijken of default waarden goed worden ingevuld", () => {
    const action = addAankoop();
    expect(action).toEqual({
        type: 'ADD_AANKOOP',
        aankoop: {
            id: expect.any(String),
            description: '',
            note: '',
            totaal: 0,
            aangemaakt: 0
        }
    })
});

test("Moet een aankoop verwijderen", () => {
    const action = verwijderAankoop({id: 'id123'});
    expect(action).toEqual({
        type: 'VERWIJDER_AANKOOP',
        id: 'id123'
    })
});

test("Een aankoop moet ge-edit worden", () => {
    const action = editAankoop('id123', {description: 'Dit is beter'});
    expect(action).toEqual({
        type: 'EDIT_AANKOOP', 
        id: 'id123', 
        update: {
            description: 'Dit is beter'
        }
    })
});