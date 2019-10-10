import createFragment from './fragments';

const navBarFragment = () => {
  const navBarProps = () => {
    const classNames = 'main-nav d-flex jc-sb ai-c';
    const element = 'nav';
    const html = `
                <div class="brand-logo">
                Todo.List
                </div>
                <ul class="nav-list order-1 d-none d-flex-md jc-fe">
                <li class="main-nav-list-item">
                    <button data-filter-type="title" data-filter-value="all" type="button" class="button">All Task</button>
                </li> 
                <li class="main-nav-list-item">
                    <button data-filter-type="isNotDue" data-filter-value="future" type="button" class="button">Active Task</button>
                </li>
                <li class="main-nav-list-item">
                    <button data-filter-type="isDue" data-filter-value="past" type="button" class="button">Due Task</button>
                </li>
                <li class="main-nav-list-item">
                    <button data-filter-type="isDone" data-filter-value="" type="button" class="button">Complete Task</button>
                </li>
                </ul>

                <div class="nav-menu d-flex jc-fe">
                <svg class="svg-menu" viewBox="0 0 24 24">
                    <path
                    fill="#000000"
                    d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                    />
                </svg>
                </div>`;
    return { classNames, element, html };
  };
  return createFragment(navBarProps());
};

export default navBarFragment;
