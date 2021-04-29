import Card from "./Card"
import Data from "./Data";
import { useState } from "react";
const Container = () => {
    const currentDate = new Date();
    const dateAndMonth = currentDate.getDate() + currentDate.toLocaleDateString("en", { month: "short" });
    const peopleWhoHasBirthdayToday = Data.filter((person) => (person.DOB === dateAndMonth));
    const [people, setPeople] = useState(peopleWhoHasBirthdayToday);
    const Wished = (Id) => {
        const yetToWishPeople = people.filter((person) => (person.Id !== Id));
        setPeople(yetToWishPeople);
    }
    const WishedAll = () => {
        setPeople([]);
    }
    return (

        <div className="box">
            <div className="box__tittle">
                <h1 className="box__heading">There are total {people.length} birthdays today</h1>
            </div>
            <div className="box__body">
                {
                    people.map(({ Name, Img, Age, Id }) => {
                        return (

                            <Card key={Id} Name={Name} Img={Img} Age={Age} Id={Id} Wished={Wished} />

                        )
                    })
                }
                <button className="btn btn-lg" onClick={WishedAll}>Wish All</button>
            </div>
        </div>
    )
}

export default Container;