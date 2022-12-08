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
            date: '22-11-2022',
            priority: 'high',
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
            date: '22-11-2022',
            priority: 'low',
            list: 'In progress',
          },
          {
            title: 'Test task',
            date: '22-11-2022',
            priority: 'low',
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
            date: '22-11-2022',
            priority: 'medium',
            list: 'Testing',
          },
        ],
      },
    ],
  },
]
