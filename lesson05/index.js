const mainContainer = document.getElementById("stc-main");

const testBoard = createBoard({
    title: "TestBoard",
    children: [
        {
            title: "List1",
            children: [
                {
                    title: "Card1"
                },
                {
                    title: "Card2"
                }
            ]
        },
        {
            title: "List2",
            children: [
                {
                    title: "Card3"
                },
                {
                    title: "Card4"
                },
                {
                    title: "Card5"
                }
            ]
        }
    ],
    parent: mainContainer
})

