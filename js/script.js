// Dados simulados para as publicações
        const posts = [
            {
                id: 1,
                user: {
                    name: "flamengo",
                    avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIGAwUHBP/EAE0QAAECBAIECQYLBQYHAQAAAAEAAgMEBREGEiExktEHExUWQVFUcYEUIjJhk7EXNVJTVnJ0kaGjsjNCY8HwJUNidYKiJDQ2RFeD4SP/xAAbAQEBAAMBAQEAAAAAAAAAAAAAAQIDBAUGB//EADERAAIBAwIGAQIFBAMBAAAAAAABAgMEERJRBRMUITFSFTJBIkJxkbEGM2GBIzTBNf/aAAwDAQACEQMRAD8A8xJC87B9nqRAR1IMoXHUgygXAJgmpELwrgjmiZwmCazEvVwa3UMS4nUrhGtzk/BA17lcpEUJsogPU1ozVvP7mfkxU1l6Zk8mV1kdsPJj3K6zHpSGWcNWlNZi7VkMB4VUkY9PNDinhMox5VQxMN91comiZeLemUOXMnEu6k1InJkQwj1qqRi6UkYEuAsVUYNtHE4rJGlvuTQQqYvJg6E86mE+CuUa3Tk/COPySOT+zIWXMiaukrP8pfIY5/dU5kTJWFfY7Msirlyj3tFQCFFU1IvKqmQgRD0/imtGXT1GUSz+k28VNaL01QvkzvlJzEZK1k/uUSvW5TmGXSP7syEu0ayprNitYozEFjVHJmxUYotmqFxFC6pNRMyYMdQzf1dXBg5GOb+rqmOWMyph3JdB3Lf+rpky7lBUyXQEyXQSymRoQLWlNReVFmLoLfkq62YO2jscL4TQbhqzUmc06EV9jEHKdSpgsL7GYesWblMzBuobV3JlQmln0krWdnZEzK4JqRM6mBrGdXBNbJnTBNbLmKYJrZC4pgamLlMDLJdUxyyWVIFBgWVGAoBZALIBb1IBqQBAEHcoQyTMwbrE2JgtBRMSppnC+DfUs1I5p0MnC6GWlZ5OaVJxDHEdCMsZNHMHaFhg6FMzcVibckuqAhAgIgN74JaVTqrVZ9tUk4U3Dgype1kQaAbrfRSb7nlcUqzpxjpeDhbwhYJcL8wYfhFbuXRojseMrit9pMHhBwV9AGe0G5NES9RX9mX4QcE/QBntW7ldESdRX9mT4QMFfQFntW7lNER1Ff2ZfhBwT/4/Z7Ru5NEB1Ff2Y+ELBX0AZ7Ru5NER1Ff2ZDwh4IGvAMMf+1u5NEdh1Nb2ZPhFwP8AQKH7Vu5NEdh1Vb2Y+EXA/wBAoftW7k0R2HVVvZj4RMD/AECh+1buTRHYdVW9mPhFwP8AQKH7Vu5NEdh1Vb2ZPhEwP9AoftW7ldEdidTW9mPhEwP9A4ftW7lNEdi9VW9mbJguo4QxnEqUvK4Rl5N8rKOjB7iHX6NQCOEdhG5q5+pnlDCcre5cDXc+sg3hMzDlMG5SMwVGjJSyRzAQiZjKKZwFoBWeTmlHDFkByFQ2kQoQgQBAejcCvxpVvsRXRQ8njcY+mJ5/gxrXQJm7QTmGkhYXbaxg3cBhGWvKNjysAvlYO8BcOqW59JyaeyPQsN4colUosrHmaLOOmbZYhhtyNcQfSu6wN/Uu+lCMod08nyt3dVaNeUYSWP0MJyg4Lh1Hk6ZdM02dsC0RnAt06tOkI4Uk9LyZUq164c6MVKP6HQ4owlM4fLYhLJiTiGzIzW2sT0HqXNVpzpvOex6lje2909LjiWxr3FtJsGAmxNsvQtOqT+56bpUovukaZisAVZwaABxbdAXqW7zTR8XxaMY3UklhHS2W880WQBAEAQCyA9W4APjLEP8Alp/UjLHyjTGegD6l5z8n2UPp/YqhmLoVMzDlDNSD2gi4REnHPg4CszleTlKxN5LIUeIQgQBAej8C3xpVvsRXRb+WeNxj6Ynn+Cv2Mz9Ye5a7z7HR/T/5z1bC9JkqfRYmJ61CEWCwkSsAjREN7AnrudS10YRjDXI3X91Ur11a0Xjc2CSr9UnsI1KvCZ4iLKmJxUvDY3i7NAIDri519BC3wqt03M8ytZQpXcbfznGX+phhWpS2LanU+UadLRobZeC8Q4sMPs7zg61+jQFKU1VbbRlfWs7GEdMvuzsMPTsnXcOVKFNwGwZCC+JDLHWLWMAv9w1hbYSU4tvwctxQnbVoKL7v/wBOgjV2hOwjP+SSMrKTkT/h7QoLWmJ/iFtOU61olUp8t4R6NK0uurgqkm15PE63KGdxEJZj8pexvnEX6CtlCWijk08QouvfuC++C8043aoewVj1kdjZ8BW9hzTjdqh7BTrI7D4Ct7InNON2qHsFOsjsT4Ct7Ic043aoewU6yOw+AreyHNON2qHsFOsjsPgK3sijCcftMPZKdZEPgNZL6jduAaHxVYxHDJuW05wv/qXVnKyeI46Z6djRmO8wdwXC13PrYy/D+xQ5TBmplFutCpoqjLkyBUaNikXKCmSOGSFUhEAQYKgwRAejcC3xrVvsRXRb+WeNxj6Ymi4AEBzntmy5ssYzBFLDYhvSbrG6xqjky4M5KnUcPP2PbeFCA2BhqmwpRobKw4zWhrdQaGEN8L2S7/tdvBhwSWu7k5/UfNhCTj1Hg3q0pKMDo0aJFYxpNgSWtWNGOqg0jPiNWNLiUZvwsGeAKXO4eqM9yxAMuJiCxkN5ILXOBdov4q29OVPOocWvKV3CPLfh9yx6LWZbCkSkU6Re6PNRXPmYjnNDcpN8o06egKunJU3GJrp3NGd2q1WXZeP9Gi1qkzVFm2Ss6GCK6GIhDTe176L+C4akHTeGfS2l1C6i5wNOmP8ArCD9Qe4rsj/1zw6n/wBVGxLzz6YaEAQBAEACqfckvDPt4Dvj7E/2B/6l7UfpPzyr/el+po7GtLBo6FwN9z6+MY6f2Ba1MhwRMoGpUmjBEJgqhkihymDLVgp1qkH3oAgCAiA9G4FvjWrfYSui38njcY+mJ5/gsXgTN/lD3LXe+EdH9P8A5z2LDNeka1QzhvEETIcoZAju6bejc9Dh0daxpVVOHLkS+sqttX6mgu2cnbSdIqlFwnU6VLMizExFc90tMyxFjcADpuDo/wDq3RpyhTcUcNa6pXN3GrNYXbKOHC8PEsm6YhVoPjy7YQeZaM4Pc5lyHWPQRoIHTYjRe4lFVE/xmXEJWc8O37f5OrxOarhypytQkKjMxqXGe18EcYS0DWWH1ELXWc6clNPsdljGhd0pUpxSnuatX6tHrlVjVCO0MLxZrWm4a0aguSrU5kss9yztY2tJU13NGqs1DksTMmIocWMhi4aNOorvpQ1UMI+cvK6ocR5j+x9nOqQ+amNkb1o6Ke53/P0PVjnVIfNzGyN6dHPcvz9D1Y51SHzcxsjenRz3Hz9D1Y51SHzcxsjenRz3Hz9D1Y51SHzcxsjenRz3Hz9D1Y51SHzcxsDenRz3I+PUGvpZtHAS8RaziSI3U6nuIv8AWXoJYifLzlqquS+7NIZ6I7lwPyfXw+lf6KVDJmN1THUVDLyFAEBkVMlCZKEyAUyQioPRuBf41q32ErooeTxuMfTE8/wV+xmfrBa737G/+n/zmyEaLEaO5eefTNHpWFJTjsFRuIqX9oua8wyyZ0wvktIJ0HVo9a9Gj/Z89z5G+eL7vD8K/wAGPBpGiRJypRanUGumHhsJsGNGu8WuSbHvS2k++pmfGIQSgqMO3nODCgVCVhRpzCmJjCdAMV3k74jhlIJJAv3akpyXenMlzbz0wu7fKf3NbxaaFAjtk8PsDgxxMaYzlwcfktPSFz13TziB63DVdz/5Ln/SPKcVn+1nD+G1d1t/aR89xj/tyOlJK3nli6AXQC6AXQC560B6twAfGWIP8tP6lGWPlGms9Edy89+T7OP0/sZa1jk2JGDgqjXJEBVCZkoZeQgMyFDMiAIQIAgPReBb40q32Irot/LPF4x9MTy2gwKnFhxTTYzYbQRnudf4LZWlTWNZx2FG5qZVB4O08ixH2xn3jctPMt9j0ej4n7GLpDEDvSmoR77H+SnMt9h0fE/YGn4gc2xmYRHUbblebQ2HR8T9jISOIgCBNwwD0AjcpzLfYKz4mvzDyPEYH/OQ7d43JzLfYdHxP3PjmqDVZuLxsxEhPfYC5dbR9y2RuKUVhHPU4Re1Jap92cXNeofwdpXqqZh8JdbIc16h1wdpOrpj4S62Q5r1Drg7SdXTHwl1shzXqHXB2k6umPhLrZDmvUOuDtJ1dMfCXWyHNef/AIO0nVUx8JdbI33gFYYdWxGx2ttOcDtLf5WTynHTPDNKZ6De5cD8n2UPH7GShnkuXMFDLTlHE5pCyTOeUGgCqIsyUNmTMrEzIgBQjAQFQp6JwLaaxVGDW6SPvXRb+WeNxhfgiefYKP8A+Uz9YLXfeEbf6f8AzmzLgPpsBAEAQBAEAQBAEAQBARUkvpZ93Ad8d4nf0eQO/UvaX0H55U/vP9TRmeg3uXA/J9dD6UUoZFaSFiZpmVswTJcZRwObYrNHNJYfYmZUmo5ysDpChCBUhbIVBQpvnAvFDMZ8U4+bGlYjbdZuDvXRbv8AEeVxeOaKf+TQaTGh0KpVCSnX5TCiuhXtfzmuIPuWy4pOolg4uEXlO2nJ1PDO35wUvtB2TuXF0tQ975m13HOGl9oOydydLU2HzNpuOcNL7Qdk7k6WpsPmbXcc4aX2g7J3J0tTYfM2u45w0vtB2TuTpamw+ZtdxzhpfaDsncnS1Nh8za7jnDS+0HZO5OlqbD5m13HOGl9oOydydLU2HzNruOcNL7Qdk7k6WpsPmbXcc4aX2g7J3J0tTYfM2u45w0vtB2TuTpamw+ZtdyOxDTbG0cnRoGU7lY2s15RhPjFq4tJ9zv8Agbf5NRcbVRwIbClWhru/jCfcF6L7RPkqf46q/wAs0oah3LgZ9il4ChQgMmqGSZXNuFUWUcnCWaVlk5pQ7nK5Ym8iBgIVFQoCENh4P51tPxnSZh7iGGOITrf4xlH4kLOk8SOLiENdCR0vCvTDSuECswgHZI0czLCRrETzzb1AkjwXoHyRqOlAEAQBAEAQBAEAQBAEAQHsGGGOpHAfUJl2XjKtOlkO3SwWYR/setVV4izt4fDXcJGirhPqwgCABCoyUMzGyGODEkrI1dyjShlFMyWJsCAIDJjnscHw3ZXtIc1w1gjSCqngwnFSi4v7m48N0BlWkcPYsl2WZOywhRrH0XWzAeBzDwXpReYpnxdWGibjsebwqLUI0JkWHL5mPAc05xpH3rCVaEXhs6afD7mpFSjHszLkCp9l/MbvWPUU9zP4u79ByBU+y/mN3p1FPcnxd36fwOQKn2X8xu9Oop7j4u79P4HIFT7L+Y3enUU9x8Xd+n8DkCp9l/MbvTqKe4+Lu/T+ByBU+y/mN3p1FPcfF3fp/A5AqfZfzG706inuPi7v0/gcgVPsv5jd6dRT3Hxd36fwOQKn2X8xu9Oop7j4u79P4HIFT7L/AL2706inuX4u79D549Om4EzCl4kC0aLYMYCCXE6Bq9a2RmpLKOWvb1KEtNRYZ67wnZKPRsN4VguuJKVEaNo1uIyg/rPitFxL7Hq8Hpd3UPPVynvEQBAEBkFDNFshcGbrXvZTuZYTJo6kHYxKpiyWQxFkACA9FwpCbi3g8q+F36ZuVvMSnX1i3j7120JZjg+a4tQ01VNfc0XCs258q+TjA8bAdaxPR1feuW8p4eo9bgV1qpuk/KO9sFxH0AsEAsEAsEAsEAsEAsEAsEAsEBCQ0G+oC50qpZZjKSim2TgyprcS4/NSmG3kKYOOcXDR5vo/jpXsUoaIJHwN9XdxcSl+x8OMawa7iSfqBJLIkTLD06mN0D3LkqS1SyfR2VHlUFE6ZYHVgIMBAEAChUzNDamYF6ywaVUGZTBdaGYITWiZgmBrQzBMDWi5gmC6kdzhGuvw9XpWosuYbHZYzR+8w69/gs6cnFnLeUVWpOJ9/CdRRhzFcGv0zK6kVYccxzB5ocRdzerT6Q7yOhdtSKnHB8za15WtdT28nxCr08gHyuF4leW7eon2R9jHidq1nUXlan9shbSnIqbGXydr7jlan9shbScipsPk7X3HK1P7ZC2k5FTYfJ2vuOVqf2yFtJyKmw+TtfccrU/tkLaTkVNh8na+45Wp/bIW0nIqbD5O19xytT+2QtpORU2Hydr7jlan9shbScipsPk7X3OtrtYgmTdBkooiRIvm+ZpsF0W9BqWZHl8U4nTdLRSeWze4kDmBwbwaV6FbrQ42Zt6UKGei/qGjvJXVWnpWDx+G2/Nq5fhHnRt0LiPqgoQIAqAoMAoBdC5OF7HBbMo5HGSMblUxzIoa89CnYumbLxTymUZKlNjinpqReTMcXETKJy5ooD2plF0TPRcETMtirDkxgmtvDS4GJTY5/u3jTl8DpHqJC6KVT7Hh8QtJRfMSPJqzS5yjVSYp0/C4uYgPLHi34j1HWug8k+FAEAugF0AugF0AugKNKA9K4JsLy73RcV14BlIpt3Qw8aI0Uau8D32Uk8LuZ04OpJRifDiauTOIa3M1KZ0GI60NnRDYPRaP613K8+ctTPr7W3VCmoLydVZYHSRUBQgVAUAQBUH0OaDrsteWjr0RZMjOpMsnLivsLDoQuENCE7IXCDI0IOw0IOxnBjPl4rI0B5hxYbszHtNiD1qptPJhUpwnHS/BvVYkpfhRoPlEpDhwsWU6GM0O9hNwvUevq6joOg3XoUqutf5Pjr+ylbVO30s8ciSceFNOlYkJ7ZhrsjoZFiHDWLLc+xwJOXg5DSp8f9pGv9RYcyG50dHcejHJU/2ONsJzIbl6K49GOSp/scbYTmQ3HRXHoxyVP9jjbCcyG46K49GOSp/plI2ynNhuOjuPRmMSnzUGGYkaXisbe1y3pVU4vwzXO3q01mccI2PAGCZrF1SILjLUyWOabmzoDG67Nv8AvW+7Weo5GnvnCNsxxiaWn2wKLQWCBQpAZITW/wB6R+8fV79a4qtTV2PpeHWPKWufk05aD1kEBEAQFQEQBUhDpQhyk+tYm7LGZTBdRboMkJVwMkQmRdBkXQjZEB9dMqE1TJ2FOSUcwo8I3Y8H8O71LKMnF5Rqq0YVYOMkbxU6dS+E6W8qp5hU/FcBmaJCJytmgBrG/WOld1OoprB8pd2c7aWftuaPLVKZp07EplegxZaahOykxW2I7940Lmr22fxRPW4dxhLFOt+53bXBwuHXBFwQuBprsz6WElOOqPgqhkNPQgPln6hLyELPMPNz6LBrd4LbToyqPCOO7vqNtHMmYYbw1U8cxnTc28U7D8td0ebiea0NGsNvrPr1D8D6kKcaSPjrq8q3c/4R3OK8UyYpjcOYVhGVo0LzXuGh0yeknpt361orVc9kepYcP5f/ACVPP2RphNiVzns4IgGhANCAaEAKAipiQ3QmGUBDJRMysTYEKEIEAQoQgQEQC6A5YExFlo8OPLxXwosJwcx7DYtPWCsk2u6NdSEZxcZeDe4ddoONpSHTcbwmwJ9oyS9VhAAj63j4dy66dZPsz5y94a4ZnT8Gt13CWI8FDj4bRUqP6TJiAMzQ3rPyfcs6lGFRHPa31a1eF42PmlK9IzDLvi8S4C5a/wDkVwTtZxfY+lt+M0Kq/H2Z87qzM1CabJUGUiTMzENm5WXJ9YH8yt1K0x3kefd8czmNFf7Nop2A6fQoTK1wkToMRwDoVMhvzPiHqNvcNHrXX+GCweElVuJ7s63F2NpuviHIy0JsjSINhBk4IsLDVmtr7tS55zcj27S1hQ7v6jWOMK04PRU2M56lMIa2UPTBkplzKYMtZbq4LqFymBqZRdYlWWUBDNRKhewKDJkVCkQBAEAQBAEBLqkbMSUMWzEuPUqa9TIcxWXZGL1PwbHhjF9dw2QyTmONlD6cnHGeGe7pb4eN1sjW0nDW4cqzzjubDFhcHGKXeV1KUj0KdHnRmyxsyL1gWFtPcCt0biL8nl1uE3EH2WRExlTMPycSRwDSYcgx2h89GbnjP9fnXJ/1HR1LXO52O224K/Nb9jSJ2NMz0y+ZnY8WYjv0uiRXZnFc0qjfk9mnaU4LEUcPEjqH3KamblQihxQ6gpkvJiOLarkcmJDCb6k1MnKiOLarknKQyepTI5aGUdSZLpQsEJ2MVTFsITIQGZUNhEAQBAEAQhiqYvIyklMk0tmQhqZM1SMgxqmTYqaMgGhQzSii5lMF1ImZXBjqRC5MDUhmTBNRMyuCaiFyYJqF0Jkl1SZF0GRdBkipGEIRCAoQiEychUNwUAQEQBUgsgwUaEMl2MgViZ5QzJgmol1cEyS6YMci6uCZIgCAFAS6EbF1SZJdCZJdCZFyqTUMymBrGZC6hdBkXVJkIAoDkKxN4QBAEAQJFQvgiECECAl1THJNKpO5bFQywLICaUMRYqjAypkaWyhqmSqBcoUyZ6EMoVyMItm9SZJpRCwKZY5aMTD6lcmt09iZD1K5Jy2MhTI5bLksmTLQWymTLB//2Q==",
                    isVerified: true
                },
                time: "há 2h",
                text: "Preparação final para a grande decisão da Libertadores! 🔴⚫ #VamosFlamengo #Libertadores",
                image: "https://images.flamengo.com.br/public/images/artigos/bodies/jewmbo1mll.jpg",
                likes: 12453,
                comments: 892,
                shares: 456,
                color: "purple",
                category: "futebol"
            },
            {
                id: 2,
                user: {
                    name: "neymarjr",
                    avatar: "data:image/jpeg;base64,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",
                    isVerified: true
                },
                time: "há 5h",
                text: "Treino pesado hoje! Foco total na recuperação e na próxima temporada. 💪⚽ #Futebol #Santos",
                image: "/js/ney.avif",
                likes: 98765,
                comments: 4321,
                shares: 2109,
                color: "green",
                category: "futebol"
            },
            {
                id: 3,
                user: {
                    name: "nba",
                    avatar: "data:image/jpeg;base64,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",
                    isVerified: true
                },
                time: "há 8h",
                text: "Highlights do jogo da noite: Lakers x Warriors! Quem você acha que vai levar a série? 🏀🔥 #NBA #Playoffs",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80",
                likes: 54321,
                comments: 3210,
                shares: 987,
                color: "blue",
                category: "basquete"
            },
            {
                id: 4,
                user: {
                    name: "marta",
                    avatar: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/RECZCVBAG5ESPNSZRIT5MMMGYY.jpg?auth=daf913928f89024d64d6cc3dd3f90367a75e8444656dbd122a20f747f81a3b2a&width=1358&height=800",
                    isVerified: true
                },
                time: "há 1 dia",
                text: "Orgulho de representar o futebol feminino brasileiro no mundo todo! Obrigada pelo apoio de todos vocês. 💚💛 #SeleçãoFeminina #FutebolFeminino",
                image: null,
                likes: 87654,
                comments: 5432,
                shares: 1234,
                color: "green",
                category: "futebol"
            },
            {
                id: 5,
                user: {
                    name: "gabigol",
                    avatar: "data:image/png;base64,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",
                    isVerified: true
                },
                time: "há 1 dia",
                text: "Feliz por marcar mais um gol na Libertadores! Obrigado à torcida pelo apoio incrível. Vamos juntos! 🔴⚫ #Flamengo #Libertadores",
                image: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/01/gabigol-cruzeiro-4-scaled-aspect-ratio-512-320-1.jpg",
                likes: 76543,
                comments: 2345,
                shares: 876,
                color: "purple",
                category: "futebol"
            }
        ];
        
        // Função para formatar números grandes (1k, 1M, etc.)
        function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            }
            if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'k';
            }
            return num.toString();
        }
        
        // Função para criar um card de publicação
        function createPostCard(post) {
            const card = document.createElement('div');
            card.className = `post-card mb-6 rounded-xl bg-gray-800 border border-gray-700 overflow-hidden transition-smooth fade-in-up neon-${post.color}`;
            
            // Cabeçalho do post (usuário e tempo)
            const header = document.createElement('div');
            header.className = 'flex items-center justify-between p-4';
            
            const userInfo = document.createElement('div');
            userInfo.className = 'flex items-center space-x-3';
            
            const avatar = document.createElement('div');
            avatar.className = 'w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5';
            
            const avatarImg = document.createElement('div');
            avatarImg.className = 'w-full h-full rounded-full bg-gray-800 overflow-hidden';
            
            const img = document.createElement('img');
            img.src = post.user.avatar;
            img.alt = post.user.name;
            img.className = 'w-full h-full object-cover';
            
            avatarImg.appendChild(img);
            avatar.appendChild(avatarImg);
            
            const userDetails = document.createElement('div');
            
            const userName = document.createElement('p');
            userName.className = 'font-bold flex items-center';
            userName.textContent = post.user.name;
            
            if (post.user.isVerified) {
                const verifiedIcon = document.createElement('i');
                verifiedIcon.className = 'fas fa-check-circle text-blue-500 ml-1 text-sm';
                userName.appendChild(verifiedIcon);
            }
            
            const time = document.createElement('p');
            time.className = 'text-xs text-gray-400';
            time.textContent = post.time;
            
            userDetails.appendChild(userName);
            userDetails.appendChild(time);
            
            userInfo.appendChild(avatar);
            userInfo.appendChild(userDetails);
            
            const options = document.createElement('button');
            options.className = 'text-gray-400 hover:text-white';
            options.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
            
            header.appendChild(userInfo);
            header.appendChild(options);
            
            // Conteúdo do post (texto)
            const content = document.createElement('div');
            content.className = 'px-4 pb-3';
            
            const text = document.createElement('p');
            text.className = 'text-gray-100';
            text.textContent = post.text;
            
            content.appendChild(text);
            
            // Imagem do post (se houver)
            let media = null;
            if (post.image) {
                media = document.createElement('div');
                media.className = 'w-full';
                
                const postImage = document.createElement('img');
                postImage.src = post.image;
                postImage.alt = 'Post image';
                postImage.className = 'w-full max-h-96 object-cover';
                
                media.appendChild(postImage);
            }
            
            // Rodapé do post (ações)
            const footer = document.createElement('div');
            footer.className = 'px-4 py-3 border-t border-gray-700';
            
            const stats = document.createElement('div');
            stats.className = 'flex items-center justify-between text-sm text-gray-400 mb-3';
            
            const likesStat = document.createElement('div');
            likesStat.className = 'flex items-center space-x-1';
            
            const likesIcon = document.createElement('i');
            likesIcon.className = 'fas fa-heart text-red-500';
            
            const likesCount = document.createElement('span');
            likesCount.textContent = formatNumber(post.likes);
            
            likesStat.appendChild(likesIcon);
            likesStat.appendChild(likesCount);
            
            const commentsStat = document.createElement('div');
            commentsStat.className = 'flex items-center space-x-1';
            
            const commentsIcon = document.createElement('i');
            commentsIcon.className = 'far fa-comment';
            
            const commentsCount = document.createElement('span');
            commentsCount.textContent = formatNumber(post.comments);
            
            commentsStat.appendChild(commentsIcon);
            commentsStat.appendChild(commentsCount);
            
            const sharesStat = document.createElement('div');
            sharesStat.className = 'flex items-center space-x-1';
            
            const sharesIcon = document.createElement('i');
            sharesIcon.className = 'fas fa-share';
            
            const sharesCount = document.createElement('span');
            sharesCount.textContent = formatNumber(post.shares);
            
            sharesStat.appendChild(sharesIcon);
            sharesStat.appendChild(sharesCount);
            
            stats.appendChild(likesStat);
            stats.appendChild(commentsStat);
            stats.appendChild(sharesStat);
            
            const actions = document.createElement('div');
            actions.className = 'flex items-center justify-between border-t border-gray-700 pt-3';
            
            const likeButton = document.createElement('button');
            likeButton.className = 'flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-smooth';
            
            const likeIcon = document.createElement('i');
            likeIcon.className = 'far fa-heart text-lg';
            
            const likeText = document.createElement('span');
            likeText.className = 'text-sm';
            likeText.textContent = 'Curtir';
            
            likeButton.appendChild(likeIcon);
            likeButton.appendChild(likeText);
            
            // Adiciona evento de curtir
            likeButton.addEventListener('click', function() {
                if (likeIcon.classList.contains('far')) {
                    likeIcon.classList.remove('far');
                    likeIcon.classList.add('fas', 'text-red-500');
                    likeText.classList.add('text-red-500');
                    post.likes += 1;
                    likesCount.textContent = formatNumber(post.likes);
                } else {
                    likeIcon.classList.remove('fas', 'text-red-500');
                    likeIcon.classList.add('far');
                    likeText.classList.remove('text-red-500');
                    post.likes -= 1;
                    likesCount.textContent = formatNumber(post.likes);
                }
            });
            
            const commentButton = document.createElement('button');
            commentButton.className = 'flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-smooth';
            
            const commentIcon = document.createElement('i');
            commentIcon.className = 'far fa-comment text-lg';
            
            const commentText = document.createElement('span');
            commentText.className = 'text-sm';
            commentText.textContent = 'Comentar';
            
            commentButton.appendChild(commentIcon);
            commentButton.appendChild(commentText);
            
            const shareButton = document.createElement('button');
            shareButton.className = 'flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-smooth';
            
            const shareIcon = document.createElement('i');
            shareIcon.className = 'fas fa-share text-lg';
            
            const shareText = document.createElement('span');
            shareText.className = 'text-sm';
            shareText.textContent = 'Compartilhar';
            
            shareButton.appendChild(shareIcon);
            shareButton.appendChild(shareText);
            
            actions.appendChild(likeButton);
            actions.appendChild(commentButton);
            actions.appendChild(shareButton);
            
            footer.appendChild(stats);
            footer.appendChild(actions);
            
            // Monta o card completo
            card.appendChild(header);
            card.appendChild(content);
            if (media) card.appendChild(media);
            card.appendChild(footer);
            
            
    // Área de comentários (inicialmente oculta)
    const commentSection = document.createElement('div');
    commentSection.className = 'px-4 pb-4 space-y-2 hidden';

    // Lista de comentários (vazia inicialmente)
    const commentList = document.createElement('div');
    commentList.className = 'space-y-1';

    // Campo de novo comentário
    const commentForm = document.createElement('div');
    commentForm.className = 'flex items-center space-x-2';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Escreva um comentário...';
    commentInput.className = 'flex-grow bg-gray-700 text-white text-sm px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500';

    const commentSend = document.createElement('button');
    commentSend.innerHTML = '<i class="fas fa-paper-plane"></i>';
    commentSend.className = 'text-blue-500 hover:text-blue-400 text-lg';

    // Evento de envio de comentário
    commentSend.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (text !== '') {
            const newComment = document.createElement('p');
            newComment.className = 'text-sm text-gray-300';
            newComment.textContent = `Você: ${text}`;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });

    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentSend);

    commentSection.appendChild(commentList);
    commentSection.appendChild(commentForm);

    // Adiciona ao card
    card.appendChild(commentSection);

    // Evento para mostrar a área de comentários
    commentButton.addEventListener('click', () => {
        commentSection.classList.toggle('hidden');
    });


    return card;
        }
        
        // Carrega as publicações no feed
        
            
            // Configura o modal de story
            const storyModal = document.getElementById('story-modal');
            const closeStory = document.getElementById('close-story');
            
            // Simula a abertura do story ao clicar em um story circle
            document.querySelectorAll('.story-border').forEach(story => {
                story.addEventListener('click', function() {
                    storyModal.classList.remove('hidden');
                });
            });
            
            // Fecha o modal
            closeStory.addEventListener('click', function() {
                storyModal.classList.add('hidden');
            });
            
            // Fecha o modal ao clicar fora
            storyModal.addEventListener('click', function(e) {
                if (e.target === storyModal) {
                    storyModal.classList.add('hidden');
                }
            });



// Carrega os posts com base na categoria selecionada
function loadFeedByCategory(category) {
    const feedContainer = document.getElementById("feed-container");
    feedContainer.innerHTML = "";

    const filteredPosts = category === "todos"
        ? posts
        : posts.filter(post => post.category === category);

    filteredPosts.forEach((post, index) => {
        setTimeout(() => {
            const postCard = createPostCard(post);
            feedContainer.appendChild(postCard);
        }, index * 100);
    });
}

// Inicializa os botões de categoria e carrega o feed
document.addEventListener("DOMContentLoaded", () => {
    loadFeedByCategory("todos");

    const categoryButtons = document.querySelectorAll(".category-button");
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selected = this.getAttribute("data-category");
            loadFeedByCategory(selected);

            categoryButtons.forEach(btn => {
                btn.classList.remove("bg-blue-600", "text-white");
                btn.classList.add("bg-gray-700");
            });
            this.classList.remove("bg-gray-700");
            this.classList.add("bg-blue-600", "text-white");
        });
    });
});