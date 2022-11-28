import { BodyHeader } from "../components/BodyHeader";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function History () {
    return (
    <>
        <Header text={'Дневник '} />
        <BodyHeader text={'Ваши последние записи и анкеты'} />
        <Footer />
    </>
    )
}