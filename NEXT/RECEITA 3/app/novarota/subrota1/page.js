import { MariaPrea, InfoComponent } from '../componentes';

export default function SubRota1() {
    return (
        <div>
            <h1>Bem-vindo à SubRota 1</h1>
            <MariaPrea mensagem="Nova mensagem para SubRota 1" />
            <InfoComponent />
        </div>
    );
}
