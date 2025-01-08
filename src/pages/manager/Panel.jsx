import MobilePanel from './MobilePanel'
import DesktopPanel from './DesktopPanel'
import PanelTrigger from './PanelTrigger'

export default function Panel({
  panelActive,
  setPanelActive,
}) {
  return (
    <>
      <MobilePanel
        panelActive={panelActive}
        setPanelActive={setPanelActive}
      />
      {panelActive && (
        <DesktopPanel
          hidePanel={() => setPanelActive(false)}
        />
      )}
      {!panelActive && (
        <PanelTrigger
          showPanel={() => setPanelActive(true)}
        />
      )}
    </>
  )
}
