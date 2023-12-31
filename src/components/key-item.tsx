import { useState } from "react";

import { Action, ActionPanel, Icon, List } from "@raycast/api";

import { KeyEnum, getKey } from "../utils/generator";

type Props = {
  type: KeyEnum;
  reloadAll: () => void;
};

export default function KeyItem({ type, reloadAll }: Props) {
  const [value, setValue] = useState(getKey(type));

  function reload() {
    setValue(getKey(type));
  }

  return (
    <List.Item
      title={value}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title="Copy Key" content={value} />
          <Action
            icon={Icon.ArrowClockwise}
            title="Reload Key"
            shortcut={{ modifiers: ["cmd"], key: "r" }}
            onAction={reload}
          />
          <ActionPanel.Section>
            <Action
              icon={Icon.ArrowClockwise}
              title="Reload All Keys"
              shortcut={{ modifiers: ["cmd", "shift"], key: "enter" }}
              onAction={reloadAll}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}
