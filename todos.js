let input = prompt('Ne yapacaksin?');
const todos = ['Tavuk', 'Horoz'];

while (input !== 'quit' && input !== 'q'){
    if (input === 'list'){
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`); //burada ilk i listenin index'ini belirtmek için todos'un i'si ise Tavuk ve horoz'u ayırmak için kullanılır.
        }
    }
    else if (input === 'new'){
        const newTodo = prompt('Ne ekleyelim?')
        todos.push(newTodo);
        console.log(`${newTodo} listeye eklendi.`);
    }
    else if (input === 'delete'){
        const index = parseInt(prompt('Tamam Sayiyi giriniz.'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Tamam ${deleted[0]} silindi.`);
        }
        else{
            console.log('Bilinmeyen index.')
        }
        //todos.splice(index, 1); //burada üstte'ki index'e girilen sayıyı alıyoruz ve 1 tanesini çıkar diyoruz.

    }
    input = prompt('Ne yapacaksın?');
}
console.log('Tamam görüşürüz.');