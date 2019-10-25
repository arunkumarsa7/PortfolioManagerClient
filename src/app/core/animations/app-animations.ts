import { trigger, transition, animate, state, style, query, group, animateChild } from '@angular/animations';
// for a fading effect presently not added
export let fade = trigger('fade', [state('void', style({ opacity: 0 })), transition(':enter', [animate(2000)])]);
// sliding effect
export function routerTransition() {
  return trigger('routerTransition',
   [

    transition('home=>portfolio', forwardAnimation),

    // transition('PortfolioProjectsPage => PortfolioPage', reverseAnimation),
    // transition('PortfolioPage => PortfolioProjectsPage', forwardAnimation),

    // transition('DashboardPage => PortfolioProjectsPage', reverseAnimation),
    // transition('PortfolioProjectsPage => DashboardPage', forwardAnimation),

    transition('projectDashboard => projects', reverseAnimation),
    transition('projects => projectDashboard', forwardAnimation),

    transition('projects => portfolio', reverseAnimation),
    transition('portfolio => projects', forwardAnimation),

    transition('ContractsPage => projectDashboard', reverseAnimation),
    transition('projectDashboard => ContractsPage', forwardAnimation),

    transition('datasourcing => projectDashboard', reverseAnimation),
    transition('projectDashboard => datasourcing', forwardAnimation),

    transition('contracts => datasourcing', reverseAnimation),
    transition('datasourcing => contracts', forwardAnimation),
// clicking home from anywhere
    transition('projectDashboard => home', reverseAnimation),
    transition('portfolio => home', reverseAnimation),
    transition('datasourcing => home', reverseAnimation),
    transition('contracts => home', reverseAnimation),
    transition('projects => home', reverseAnimation)
  ]
  );
}

const forwardAnimation = [
  style({
    position: 'relative',
    height: '!'
  }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  //
  query(':enter', [
    style({ transform: 'translateX(100%)' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(-100%)' }))
    ]),
    query(':enter', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(0%)' }))
    ])
  ]),
  query(':enter', animateChild()),
];
const reverseAnimation = [
  style({ position: 'relative', height: '!' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  //
  query(':enter', [
    style({ transform: 'translateX(-100%)' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(100%)' }))
    ]),
    query(':enter', [
      animate('500ms cubic-bezier(.92,0,.32,.92)', style({ transform: 'translateX(0%)' }))
    ])
  ]),
  query(':enter', animateChild()),
];







