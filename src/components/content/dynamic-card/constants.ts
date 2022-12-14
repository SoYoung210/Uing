export const CARD_COLORS = ['#FF574C', '#71319D', '#005C98'];

export const ILLUST_SET = ['flower', 'circleSquare'] as const;
type IllustType = typeof ILLUST_SET[number];

export const ILLUST_DATA_URL: Record<IllustType, string> = {
  flower:
    'PHN2ZyB3aWR0aD0iMjA5IiBoZWlnaHQ9IjIwOCIgdmlld0JveD0iMCAwIDIwOSAyMDgiIGZpbGw9ImJsYWNrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTA0LjUgMEM4OC41NDUxIDAgNzUuNjExMSAxMi45MzQgNzUuNjExMSAyOC44ODg5VjM0LjY2NjdMNzEuNDQ5MyAzMC41MDQ5QzYwLjE2NzUgMTkuMjIzMSA0MS44NzYxIDE5LjIyMzEgMzAuNTk0MyAzMC41MDQ5QzE5LjMxMjUgNDEuNzg2NyAxOS4zMTI1IDYwLjA3ODEgMzAuNTk0MyA3MS4zNTk5TDM0LjM0NTQgNzUuMTExMUgyOS4zODg5QzEzLjQzNCA3NS4xMTExIDAuNSA4OC4wNDUxIDAuNSAxMDRDMC41IDExOS45NTUgMTMuNDM0IDEzMi44ODkgMjkuMzg4OSAxMzIuODg5SDM0LjAxMTFMMjkuODQ5MyAxMzcuMDUxQzE4LjU2NzUgMTQ4LjMzMyAxOC41Njc1IDE2Ni42MjQgMjkuODQ5MyAxNzcuOTA2QzQxLjEzMTEgMTg5LjE4OCA1OS40MjI2IDE4OS4xODggNzAuNzA0NCAxNzcuOTA2TDc1LjYxMTEgMTcyLjk5OVYxNzkuMTExQzc1LjYxMTEgMTk1LjA2NiA4OC41NDUxIDIwOCAxMDQuNSAyMDhDMTIwLjQ1NSAyMDggMTMzLjM4OSAxOTUuMDY2IDEzMy4zODkgMTc5LjExMVYxNzQuMTU1TDEzNi44MTcgMTc3LjU4M0MxNDguMDk5IDE4OC44NjUgMTY2LjM5MSAxODguODY1IDE3Ny42NzIgMTc3LjU4M0MxODguOTU0IDE2Ni4zMDEgMTg4Ljk1NCAxNDguMDEgMTc3LjY3MiAxMzYuNzI4TDE3My44MzMgMTMyLjg4OUgxNzkuNjExQzE5NS41NjYgMTMyLjg4OSAyMDguNSAxMTkuOTU1IDIwOC41IDEwNEMyMDguNSA4OC4wNDUxIDE5NS41NjYgNzUuMTExMSAxNzkuNjExIDc1LjExMTFIMTczLjQ5OUwxNzYuOTI4IDcxLjY4MjZDMTg4LjIwOSA2MC40MDA4IDE4OC4yMDkgNDIuMTA5MyAxNzYuOTI4IDMwLjgyNzVDMTY1LjY0NiAxOS41NDU3IDE0Ny4zNTQgMTkuNTQ1NyAxMzYuMDcyIDMwLjgyNzVMMTMzLjM4OSAzMy41MTExVjI4Ljg4ODlDMTMzLjM4OSAxMi45MzQgMTIwLjQ1NSAwIDEwNC41IDBaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjJfMjgpIi8+CjxwYXRoIGQ9Ik03NS4yNTc2IDM1LjAyMDJMNzYuMTExMSAzNS44NzM4VjM0LjY2NjdWMjguODg4OUM3Ni4xMTExIDEzLjIxMDEgODguODIxMyAwLjUgMTA0LjUgMC41QzEyMC4xNzkgMC41IDEzMi44ODkgMTMuMjEwMSAxMzIuODg5IDI4Ljg4ODlWMzMuNTExMVYzNC43MTgyTDEzMy43NDIgMzMuODY0N0wxMzYuNDI2IDMxLjE4MTFDMTQ3LjUxMyAyMC4wOTQ1IDE2NS40ODcgMjAuMDk0NSAxNzYuNTc0IDMxLjE4MTFDMTg3LjY2MSA0Mi4yNjc2IDE4Ny42NjEgNjAuMjQyNSAxNzYuNTc0IDcxLjMyOUwxNzMuMTQ1IDc0Ljc1NzZMMTcyLjI5MiA3NS42MTExSDE3My40OTlIMTc5LjYxMUMxOTUuMjkgNzUuNjExMSAyMDggODguMzIxMyAyMDggMTA0QzIwOCAxMTkuNjc5IDE5NS4yOSAxMzIuMzg5IDE3OS42MTEgMTMyLjM4OUgxNzMuODMzSDE3Mi42MjZMMTczLjQ4IDEzMy4yNDJMMTc3LjMxOSAxMzcuMDgyQzE4OC40MDUgMTQ4LjE2OCAxODguNDA1IDE2Ni4xNDMgMTc3LjMxOSAxNzcuMjNDMTY2LjIzMiAxODguMzE2IDE0OC4yNTggMTg4LjMxNiAxMzcuMTcxIDE3Ny4yM0wxMzMuNzQyIDE3My44MDFMMTMyLjg4OSAxNzIuOTQ3VjE3NC4xNTVWMTc5LjExMUMxMzIuODg5IDE5NC43OSAxMjAuMTc5IDIwNy41IDEwNC41IDIwNy41Qzg4LjgyMTMgMjA3LjUgNzYuMTExMSAxOTQuNzkgNzYuMTExMSAxNzkuMTExVjE3Mi45OTlWMTcxLjc5Mkw3NS4yNTc2IDE3Mi42NDVMNzAuMzUwOCAxNzcuNTUyQzU5LjI2NDMgMTg4LjYzOSA0MS4yODk0IDE4OC42MzkgMzAuMjAyOSAxNzcuNTUyQzE5LjExNjMgMTY2LjQ2NiAxOS4xMTYzIDE0OC40OTEgMzAuMjAyOSAxMzcuNDA0TDM0LjM2NDcgMTMzLjI0MkwzNS4yMTgyIDEzMi4zODlIMzQuMDExMUgyOS4zODg5QzEzLjcxMDEgMTMyLjM4OSAxIDExOS42NzkgMSAxMDRDMSA4OC4zMjEyIDEzLjcxMDEgNzUuNjExMSAyOS4zODg5IDc1LjYxMTFIMzQuMzQ1NEgzNS41NTI1TDM0LjY5OSA3NC43NTc2TDMwLjk0NzggNzEuMDA2NEMxOS44NjEzIDU5LjkxOTggMTkuODYxMyA0MS45NDUgMzAuOTQ3OCAzMC44NTg0QzQyLjAzNDQgMTkuNzcxOSA2MC4wMDkyIDE5Ljc3MTkgNzEuMDk1OCAzMC44NTg0TDc1LjI1NzYgMzUuMDIwMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjA0Ii8+Cjwvc3ZnPgo=',
  circleSquare:
    'PHN2ZyB3aWR0aD0iMTg4IiBoZWlnaHQ9IjE4OCIgdmlld0JveD0iMCAwIDE4OCAxODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTQgMTg4QzE0NS45MTUgMTg4IDE4OCAxNDUuOTE1IDE4OCA5NEMxODggNDIuMDg1MiAxNDUuOTE1IDAgOTQgMEM0Mi4wODUyIDAgMCA0Mi4wODUyIDAgOTRDMCAxNDUuOTE1IDQyLjA4NTIgMTg4IDk0IDE4OFpNMTA0LjgxNCAyOC44MTM3Qzk4LjU2NTMgMjIuNTY1MyA4OC40MzQ3IDIyLjU2NTMgODIuMTg2MyAyOC44MTM3TDI4LjgxMzcgODIuMTg2M0MyMi41NjUzIDg4LjQzNDcgMjIuNTY1MyA5OC41NjUzIDI4LjgxMzcgMTA0LjgxNEw4Mi4xODYzIDE1OC4xODZDODguNDM0NyAxNjQuNDM1IDk4LjU2NTMgMTY0LjQzNSAxMDQuODE0IDE1OC4xODZMMTU4LjE4NiAxMDQuODE0QzE2NC40MzUgOTguNTY1MyAxNjQuNDM1IDg4LjQzNDcgMTU4LjE4NiA4Mi4xODYzTDEwNC44MTQgMjguODEzN1oiIGZpbGw9IiMyOTI5MjkiLz4KPC9zdmc+Cg==',
};

export const ILLUST_SIZE: Record<IllustType, number> = {
  flower: 209,
  circleSquare: 188,
};

export const ILLUST_LINEAR_GRADIENT_ID = 'employee-card-linear-gradient';
export const ILLUST_LINEAR_GRADIENT_COLOR_SET = {
  gradient0: ['#C1263D', '#C1263D', '#9926C1', '#9926C1'],
  gradient1: ['#3ADBA1', '#4098FF', '#FF5959', '#49C179'],
  gradient2: ['#04CC00', '#04CC00', '#12C2CD', '#12C2CD'],
};

export const NO_PSEUDO_ELEMENT_CLASS_NAME = 'no-pseudo-element';
export const EFFECT_CLASS_NAME = 'effect';
