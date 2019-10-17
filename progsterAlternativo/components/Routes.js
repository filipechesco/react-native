import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TelaInicial from './TelaInicial';
import Mundos from './Mundos';
import FasesSelecao from './FasesSelecao';
import Fase01 from './Fases/Fase01';

const MainStack = createStackNavigator(
    {
        Home:TelaInicial,
        Mundos: Mundos,
        FasesSelecao: FasesSelecao,
        Fase01: Fase01,
             
    },
    {
        headerMode: 'none'
    }
)

const RootStack = createStackNavigator(
    {
         Main: MainStack,
        // Modal: Modal
    },
    {
        // mode: 'modal',
        headerMode: 'none'
    }
)

const Routes = createAppContainer(RootStack);

export default Routes;