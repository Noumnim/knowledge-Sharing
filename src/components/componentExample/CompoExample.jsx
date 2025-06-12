import React from 'react'
import StateComponent from '../state/StateComponent'
import EffectComponent from '../effect/EffectComponent'
import ContextComponent from '../context/ContextComponent'
import ReducerComponent from '../reducer/ReducerComponent'
import CallbackComponent from '../callback/CallbackComponent'
import MemoComponent from '../memo/MemoComponent'
import RefComponent from '../ref/RefComponent'
import LayoutComponent from '../layoutEffect/LayoutComponent'
import ImperComponent from '../imperativeHandle/ImperComponent'

export default function CompoExample({title}) {
    const componentMap ={
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
  return (
    <div>
      {componentMap[title]}
    </div>
  )
}
