export const portfolioArray = [
    {
        id: 1,
        cardId: "card1",
        image: "Pic1",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 10,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false,
                                reply: {
                                    threadId: 4,
                                    arrayOfReplies: [
                                        {
                                            id: 1,
                                            image: "Name1",
                                            fullName: "Name3",
                                            date: "January 16, 2020 AT 11:20AM",
                                            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                            inputIsShown: false,
                                        },
                                        {
                                            id: 2,
                                            image: "Name1",
                                            fullName: "Name3",
                                            date: "January 16, 2020 AT 11:20AM",
                                            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                            inputIsShown: false,
                                        }
                                    ]
                                }
                            },
                            {
                                id: 2,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false,
                                reply: {
                                    threadId: 5,
                                    arrayOfReplies: [
                                        {
                                            id: 1,
                                            image: "Name1",
                                            fullName: "Name3",
                                            date: "January 16, 2020 AT 11:20AM",
                                            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                            inputIsShown: false
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        id: 2,
        cardId: "card2",
        image: "Pic2",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 3,
        cardId: "card3",
        image: "Pic3",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 4,
        cardId: "card4",
        image: "Pic4",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
            ,
            {
                id: 3,
                title: "#3. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 5,
        cardId: "card5",
        image: "Pic5",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 6,
        cardId: "card6",
        image: "Pic6",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 7,
        cardId: "card7",
        image: "Pic7",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 8,
        cardId: "card8",
        image: "Pic8",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 9,
        cardId: "card9",
        image: "Pic9",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 10,
        cardId: "card10",
        image: "Pic10",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 11,
        cardId: "card11",
        image: "Pic11",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                    'Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.',
                    'Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!',
                    'Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?'
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    },
    {
        id: 12,
        cardId: "card12",
        image: "Pic12",
        creationDate: "January 21, 2020",
        shortInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        author: "Admin",
        subHeader: "ILLUSTRATION",
        header: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraphs: [
            {
                id: 1,
                title: "#1. Lorem ipsum dolor sit amet.",
                text: [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
                    'Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!'
                ]
            },
            {
                id: 2,
                title: "#2. Lorem ipsum dolor sit amet.",
                text: [
                    'Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.',
                    'Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.',
                ]
            }
        ],
        comments: {
            sum: 6,
            array: [
                {
                    id: 1,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 1,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 2,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    image: "Name1",
                    fullName: "Name1",
                    date: "January 16, 2020 AT 11:20AM",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                    inputIsShown: false,
                    reply: {
                        threadId: 3,
                        arrayOfReplies: [
                            {
                                id: 1,
                                image: "Name1",
                                fullName: "Name2",
                                date: "January 16, 2020 AT 11:20AM",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
                                inputIsShown: false
                            }
                        ]
                    }
                },
            ]
        }
    }
]
