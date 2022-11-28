import { BodyHeader } from "../components/BodyHeader";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Home () {
    return (
    <>
        <Header text={'Привет, '} username={'Тимурка'}/>
        <BodyHeader text={'Выполняйте ежедневные рекомендации лечащего врача'} />
        <Footer />
    </>
    )
}