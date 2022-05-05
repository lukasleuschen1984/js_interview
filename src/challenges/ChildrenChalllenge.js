import * as React from 'react';
// Parent text (I need to be updated from my child) should be updated (Using Callback) when Child button below is clicked.
// Feel free to use any string to update the parent's current string.
export function ChildrenChallenge() {
    function Child({ setValue }) {
        return (
          <>
            <div>Child</div>
            <button onClick={() => setValue("Parent has been updated!")}>
              Change Parent Value
            </button>
          </>
        );
      }
      
      function Parent() {
        const [value, setValue] = React.useState(
          "I need to be updated from my child"
        );
      
        return (
          <>
            <h3>Update Parent State Challenge</h3>
            <div>
                <span>
                    Parent text (I need to be updated from my child) should be updated (Using Callback) when Child button below is clicked.
                    Feel free to use any string to update the parent's current string.
                </span>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="wrapper">
              <div>Parent</div>
              <div className="box-wrapper">{value}</div>
            </div>
      
            <div className="wrapper">
              <Child setValue={setValue} />
            </div>
          </>
        );
      }
    return (
        <Parent />
    )
}