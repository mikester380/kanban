import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

export default function Header({
  panelIsActive,
  togglePanelActive,
}) {
  return (
    <>
      <MobileHeader
        panelIsActive={panelIsActive}
        togglePanelActive={togglePanelActive}
      />
      <DesktopHeader logoIsHidden={panelIsActive} />
    </>
  )
}
