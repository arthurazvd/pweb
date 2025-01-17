import { MariaPrea } from "./componentes";

export default function NovaRotaHome(){
    return (
       <div>
          <h1>Nova Rota, Nova Página</h1>
          <MariaPrea mensagem="Morreu Maria Preá..." />
       </div>
    )
}

export function InfoComponent() {
    return (
        <div>
            <p>Informações adicionais sobre Maria Preá...</p>
        </div>
    );
}
