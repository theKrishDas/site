import { LuFileJson2 } from "react-icons/lu"
import { MdOutlineFolder } from "react-icons/md"
import { RiJavascriptLine } from "react-icons/ri"
import {
  TbBrandReactNative,
  TbBrandTypescript,
  TbFileTypeCss,
  TbFileTypeTxt,
  TbMarkdown,
} from "react-icons/tb"
import { CopyButton } from "./copy-button"

const FILE_EXTENSION_REGEX = /\.([^.]+)$/
const FOLDER_TRAILING_SLASH_REGEX = /\/$/

const DEFAULT_FOLDER_ICON = <MdOutlineFolder />
const DEFAULT_FILE_ICON = <TbFileTypeTxt />

// TODO: Use lazy import for icons
const FILE_EXTENSION_ICONS: Record<string, React.ReactNode> = {
  txt: DEFAULT_FILE_ICON,
  tsx: <TbBrandReactNative size={15} />,
  jsx: <TbBrandReactNative size={15} />,
  ts: <TbBrandTypescript />,
  md: <TbMarkdown />,
  js: <RiJavascriptLine />,
  css: <TbFileTypeCss />,
  scss: <TbFileTypeCss />,
  json: <LuFileJson2 size={14} />,
}

function isFolder(filename: string): boolean {
  return FOLDER_TRAILING_SLASH_REGEX.test(filename)
}

function getFileExtension(filename: string): string | undefined {
  const match = filename.match(FILE_EXTENSION_REGEX)
  return match?.[1]
}

function getFileIcon(
  fileExtension: string | undefined,
  customIcon: React.ReactElement | undefined,
  isFileFolder: boolean
): React.ReactNode {
  if (customIcon) return customIcon
  if (isFileFolder) return DEFAULT_FOLDER_ICON
  return FILE_EXTENSION_ICONS[fileExtension ?? "txt"] ?? DEFAULT_FILE_ICON
}

export type FileNameProps = Omit<React.ComponentProps<"span">, "children"> & {
  icon?: React.ReactElement
  children: string
}

export function FileName({
  icon: customIcon,
  children,
  className,
  ...rest
}: FileNameProps) {
  const filename = children.toString().trim()
  const displayName = filename.replace(FOLDER_TRAILING_SLASH_REGEX, "")
  const isFileFolder = isFolder(filename)
  const fileExtension = isFileFolder
    ? undefined
    : (getFileExtension(filename) ?? "txt")
  const icon = getFileIcon(fileExtension, customIcon, isFileFolder)

  return (
    <span
      className={`--ui-filename-root ui:corner-squircle ui:relative ui:mb-px ui:inline-flex ui:h-6 ui:w-fit ui:items-center ui:justify-center ui:rounded-lg ui:border ui:border-gray-200/50 ui:bg-white ui:align-middle ui:text-label-primary/80 ui:outline-none ui:dark:border-gray-6/80 ui:dark:bg-neutral-950 ui:[&>*:not(button)]:pointer-events-none ${className}`}
      {...rest}
    >
      <span
        aria-hidden={true}
        className="--ui-filename-icon ui:inline-grid ui:h-full ui:w-fit ui:place-content-center ui:px-0.75"
      >
        {icon}
      </span>
      <span className="--ui-filename-label ui:inline-grid ui:h-full ui:place-content-center ui:pr-1 ui:font-medium ui:font-mono ui:text-[0.82rem] ui:leading-none">
        {displayName}
      </span>

      <CopyButton value={filename} />
    </span>
  )
}
