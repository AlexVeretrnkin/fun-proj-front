export const ongoings = (state = [], action: any) => {
    switch (action.type) {
        case 'GET_ONGOINGS':
            return [
                {
                    description:
                        'Underworld - мир, ранее недоступный человеческому пониманию. Мир, со своими законами - "Индексом Запретов".' +
                        ' За его соблюдением следит "Церковь Аксиомы" и рыцари единства, стать...',
                    imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
                    series: 36,
                    title: 'Мастера Меча Онлайн: Алисизация'
                },
                {
                    description:
                        'Underworld - мир, ранее недоступный человеческому пониманию. Мир, со своими законами - "Индексом Запретов".' +
                        ' За его соблюдением следит "Церковь Аксиомы" и рыцари единства, стать...',
                    imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
                    series: 36,
                    title: 'Мастера Меча Онлайн: Алисизация'
                },
                {
                    description:
                        'Underworld - мир, ранее недоступный человеческому пониманию. Мир, со своими законами - "Индексом Запретов".' +
                        ' За его соблюдением следит "Церковь Аксиомы" и рыцари единства, стать...',
                    imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
                    series: 36,
                    title: 'Мастера Меча Онлайн: Алисизация'
                },
                {
                    description:
                        'Underworld - мир, ранее недоступный человеческому пониманию.',
                    imgUrl: 'https://static.anilibria.tv/upload/release/270x390/7439.jpg?1566259183',
                    series: 36,
                    title: 'Мастера Меча Онлайн: Алисизация'
                }
            ];
        default:
            return state;
    }
}
