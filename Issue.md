```item-label]') (3ms)
[test:execute]         Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
[test:execute]         Call log:
[test:execute]           - waiting for locator(':light(label[data-testid=todo-item-label])')
[test:execute]             - locator resolved to <label data-testid="todo-item-label">QA testing</label>
[test:execute]             - fill("E2E testing")
[test:execute]           - attempting fill action
[test:execute]             - waiting for element to be visible, enabled and editable
[test:execute]         
[test:execute]   ⇢ Then she should see item added to the list to be completed
```