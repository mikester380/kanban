import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

export default function Header({
  panelActive,
  setPanelActive,
}) {
  return (
    <>
      <MobileHeader
        panelActive={panelActive}
        // TODO: might wrap this in a useCallback later for performance.
        togglePanelActive={() => {
          setPanelActive(!panelActive)
        }}
      />
      <DesktopHeader
        logoIsHidden={panelActive}
        setPanelActive={setPanelActive}
      />
    </>
  )
}
