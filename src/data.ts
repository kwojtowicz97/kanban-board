export enum Priority {
  LOW = 'green',
  MEDIUM = 'orange',
  HIGH = 'red',
}

export const data = [
  {
    projectName: 'First project',
    lists: [
      {
        badgeColor: '#5ca05c',
        badge: 'Open',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          { title: 'First task', date: '22-11-2022', priority: Priority.HIGH },
        ],
      },
      {
        badgeColor: 'lightblue',
        badge: 'In progress',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          { title: 'Second task', date: '22-11-2022', priority: Priority.LOW },
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
            priority: Priority.MEDIUM,
          },
        ],
      },
    ],
  },
  {
    projectName: 'Second project',
    lists: [
      {
        badgeColor: '#5ca05c',
        badge: 'Open',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          {
            title: 'First 2 task',
            date: '22-11-2022',
            priority: Priority.HIGH,
          },
        ],
      },
      {
        badgeColor: 'lightblue',
        badge: 'In progress',
        isCollapsed: false,
        isColorWheelShown: false,
        tasks: [
          { title: 'Second task', date: '22-11-2022', priority: Priority.LOW },
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
            priority: Priority.MEDIUM,
          },
        ],
      },
    ],
  },
]
