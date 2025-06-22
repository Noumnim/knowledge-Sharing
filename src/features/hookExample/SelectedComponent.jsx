import React from 'react'
import StateComponent from '../hookExample/components/StateComponent'
import EffectComponent from '../hookExample/components/EffectComponent'
import ReducerComponent from '../hookExample/components/ReducerComponent'
import CallbackComponent from '../hookExample/components/CallbackComponent'
import MemoComponent from '../hookExample/components/MemoComponent'
import RefComponent from '../hookExample/components/RefComponent'
import LayoutComponent from '../hookExample/components/LayoutComponent'
import ImperComponent from '../hookExample/components/ImperComponent'
import ContextComponent from '../hookExample/components/ContextComponent'

export default function SelectedComponent({title}) {
    const findComponent ={
        'useState':<StateComponent/>,
        'useEffect':<EffectComponent/>,
        'useContext':<ContextComponent/>,
        'useReducer':<ReducerComponent/>,
        'useCallback':<CallbackComponent/>,
        'useMemo':<MemoComponent/>,
        'useRef':<RefComponent/>,
        'useLayoutEffect':<LayoutComponent/>,
        'useImperativeHandle':<ImperComponent/>
    }
    console.log(title)
  return (
    <div>
      {findComponent[title]}
    </div>
  )
}
