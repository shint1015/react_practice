import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterSlice } from "../features/counter";
import { logSlice, LogState } from "../features/log";
import { AppState } from "../store";


type Props = {
    samplePropData?: string
}

const Sample: FC<Props> = ({samplePropData}) => {
    const { count, log } = useSelector<
        AppState,
        { count: number, log: LogState }
    >((state) => ({
        count: state.counter.count,
        log: state.log
    }))
    const dispatch = useDispatch()
    const { incrementCount, decrementCount } = counterSlice.actions
    const { addLog, deleteLog, setLogLoading } = logSlice.actions
    return (
        <>
            <h1>Sample Component</h1>
            <p>SamplePropData: {samplePropData}</p>
            <h2>Counter State</h2>
            <p>count: {count}</p>
            <button type="button" onClick={() => dispatch(incrementCount())}>increment button</button>
            <button type="button" onClick={() => dispatch(decrementCount())}>decrement button</button>
            <h2>Log State</h2>
            <p>log.logs.length: {log.logs.length}</p>
            <p>log.loading: {log.loading.toString()}</p>
            <button type="button" onClick={() => dispatch(addLog({id: 1, text: 'xxxx'}))}>addLog</button>
            <button type="button" onClick={() => dispatch(deleteLog({id: 1}))}>deleteLog</button>
            <button type="button" onClick={() => dispatch(setLogLoading())}>setLogLoading</button>
        </>
    )
}

export default Sample