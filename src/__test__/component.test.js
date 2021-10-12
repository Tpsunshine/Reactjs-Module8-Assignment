import React from 'react';
import {create} from 'react-test-renderer';
import ListView from '../container/listView';

describe('Listview Component Snapshot', ()=>
{
    test("ListView",()=>
    {
        let tree = create[<ListView/>];
        expect(tree).toMatchSnapshot();
    })
})