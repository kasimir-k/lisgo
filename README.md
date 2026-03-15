# Lisgo

Lisgo is a list app. It can be used as shopping list, todo list, or other list where you can add items and then check them off.

## Features overview

- Sign up as a user. (Initially probably manual addition to the user database)
- Add lists.
- Give a list a name.
- Share a list with another user.
- Add items to a list.
- Change the status of an item: checked or unchecked.
- Import items to a list.
- Delete an item.
- Search checked items to uncheck them. (When I want to add yogurt to shopping list, I just type "yo" and select it)

## Tech overview

- PWA
- Deno Deploy
- Deno KV
- SolidSstart

## Entities

Properties marked with "*" are used as the key.

- User
  - email*: string
- List
  - owner*: User.email
  - contributors: User.email[]
  - name*: string
- Item
  - list*: List.name
  - name*: string
  - checked: boolean
  - lastChecked: timestamp
  - checkingCount: number
