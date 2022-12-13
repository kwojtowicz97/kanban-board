import { TProject } from './providers/KanbanProvider'

export const data: TProject[] = [
  {
    projectName: 'First project',
    lists: [
      {
        badgeColor: '#5ca05c',
        badge: 'Open',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          {
            title: 'First task',
            date: '2022-12-20',
            priority: 'High',
            list: 'Open',
          },
        ],
      },
      {
        badgeColor: 'lightblue',
        badge: 'In progress',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          {
            title: 'Second task',
            date: '2022-12-20',
            priority: 'Low',
            list: 'In progress',
          },
          {
            title: 'Test task',
            date: '2022-12-20',
            priority: 'Low',
            list: 'In progress',
          },
        ],
      },
      {
        badgeColor: 'gray',
        badge: 'Testing',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          {
            title: 'Third task',
            date: '2022-12-20',
            priority: 'Medium',
            list: 'Testing',
          },
        ],
      },
    ],
  },
]
