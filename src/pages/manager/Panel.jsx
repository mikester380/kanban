import MobilePanel from './MobilePanel'
import DesktopPanel from './DesktopPanel'

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
    </>
  )
}
