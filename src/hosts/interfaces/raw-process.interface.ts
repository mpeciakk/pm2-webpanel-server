// Generated using https://app.quicktype.io/?l=ts

export interface RawProcess {
    pid: number
    name: string
    pm2_env: Pm2Env
    pm_id: number
    monit: Monit
}

export interface Monit {
    memory: number
    cpu: number
}

export interface Pm2Env {
    kill_retry_time: number
    windowsHide: boolean
    username: string
    treekill: boolean
    automation: boolean
    pmx: boolean
    instance_var: string
    watch: boolean
    autorestart: boolean
    vizion: boolean
    merge_logs: boolean
    env: Env
    namespace: string
    filter_env: any[]
    name: string
    node_args: any[]
    pm_exec_path: string
    pm_cwd: string
    exec_interpreter: string
    exec_mode: string
    instances: number
    pm_out_log_path: string
    pm_err_log_path: string
    pm_pid_path: string
    km_link: boolean
    vizion_running: boolean
    NODE_APP_INSTANCE: number
    PM2_USAGE: string
    _: string
    VSCODE_IPC_HOOK_CLI: string
    TERM_PROGRAM: string
    OLDPWD: string
    PULSE_SERVER: string
    HOSTTYPE: string
    PATH: string
    XDG_DATA_DIRS: string
    VSCODE_GIT_ASKPASS_MAIN: string
    WSLENV: string
    XDG_RUNTIME_DIR: string
    SHLVL: string
    DISPLAY: string
    VSCODE_GIT_IPC_HANDLE: string
    USER: string
    LESSOPEN: string
    TERM: string
    LESSCLOSE: string
    GIT_ASKPASS: string
    WAYLAND_DISPLAY: string
    LS_COLORS: string
    WSL_INTEROP: string
    LANG: string
    HOME: string
    MOTD_SHOWN: string
    VSCODE_GIT_ASKPASS_NODE: string
    LOGNAME: string
    PWD: string
    NAME: string
    WSL_DISTRO_NAME: string
    TERM_PROGRAM_VERSION: string
    COLORTERM: string
    SHELL: string
    PM2_HOME: string
    unique_id: string
    status: string
    pm_uptime: number
    axm_actions: AxmAction[]
    axm_monitor: AxmMonitor
    axm_options: AxmOptions
    axm_dynamic: AxmDynamic
    created_at: number
    pm_id: number
    restart_time: number
    unstable_restarts: number
    version: string
    versioning: null
    node_version: string
}

export interface AxmAction {
    action_name: string
    action_type: string
    arity: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AxmDynamic {}

export interface AxmMonitor {
    'Heap Size': EventLoopLatency
    'Heap Usage': ActiveHandles
    'Used Heap Size': EventLoopLatency
    'Active requests': ActiveHandles
    'Active handles': ActiveHandles
    'Event Loop Latency': EventLoopLatency
    'Event Loop Latency p95': EventLoopLatency
}

export interface ActiveHandles {
    value: number
    type: string
    historic: boolean
    unit?: string
}

export interface EventLoopLatency {
    value: string
    type: string
    unit: string
    historic: boolean
}

export interface AxmOptions {
    error: boolean
    heapdump: boolean
    'feature.profiler.heapsnapshot': boolean
    'feature.profiler.heapsampling': boolean
    'feature.profiler.cpu_js': boolean
    latency: boolean
    catchExceptions: boolean
    profiling: boolean
    metrics: Metrics
    standalone: boolean
    tracing: Tracing
    module_conf: AxmDynamic
    apm: Apm
    module_name: string
    module_version: string
}

export interface Apm {
    version: string
    type: string
}

export interface Metrics {
    http: boolean
    runtime: boolean
    eventLoop: boolean
    network: boolean
    v8: boolean
}

export interface Tracing {
    outbound: boolean
    enabled: boolean
}

export interface Env {
    PM2_USAGE: string
    _: string
    VSCODE_IPC_HOOK_CLI: string
    TERM_PROGRAM: string
    OLDPWD: string
    PULSE_SERVER: string
    HOSTTYPE: string
    PATH: string
    XDG_DATA_DIRS: string
    VSCODE_GIT_ASKPASS_MAIN: string
    WSLENV: string
    XDG_RUNTIME_DIR: string
    SHLVL: string
    DISPLAY: string
    VSCODE_GIT_IPC_HANDLE: string
    USER: string
    LESSOPEN: string
    TERM: string
    LESSCLOSE: string
    GIT_ASKPASS: string
    WAYLAND_DISPLAY: string
    LS_COLORS: string
    WSL_INTEROP: string
    LANG: string
    HOME: string
    MOTD_SHOWN: string
    VSCODE_GIT_ASKPASS_NODE: string
    LOGNAME: string
    PWD: string
    NAME: string
    WSL_DISTRO_NAME: string
    TERM_PROGRAM_VERSION: string
    COLORTERM: string
    SHELL: string
    PM2_HOME: string
    unique_id: string
}
