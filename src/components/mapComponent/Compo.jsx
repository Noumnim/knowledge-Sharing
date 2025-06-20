import React from 'react'
import StateComponent from '../StateComponent'
import EffectComponent from '../EffectComponent'
import ReducerComponent from '../ReducerComponent'
import CallbackComponent from '../CallbackComponent'
import MemoComponent from '../MemoComponent'
import RefComponent from '../RefComponent'
import LayoutComponent from '../LayoutComponent'
import ImperComponent from '../ImperComponent'
import ContextComponent from '../ContextComponent'

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
