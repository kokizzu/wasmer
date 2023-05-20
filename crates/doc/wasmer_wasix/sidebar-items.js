window.SIDEBAR_ITEMS = {"constant":[["ALL_RIGHTS","all the rights enabled"]],"enum":[["FsError","Error type for external users"],["VirtualBusError",""],["WasiError","This is returned in `RuntimeError`. Use `downcast` or `downcast_ref` to retrieve the `ExitCode`."],["WasiFsError","Error type for external users"],["WasiRuntimeError",""],["WasiStateCreationError","Error type returned when bad data is given to [`WasiEnvBuilder`]."],["WasiVersion","The version of WASI. This is determined by the imports namespace string."]],"fn":[["capture_snapshot",""],["generate_import_object_from_env","Create an [`Imports`] with an existing [`WasiEnv`]. `WasiEnv` needs a [`WasiState`], that can be constructed from a `WasiEnvBuilder`."],["generate_import_object_snapshot0","Combines a state generating function with the import list for legacy WASI"],["generate_import_object_snapshot1",""],["generate_import_object_wasix32_v1","Combines a state generating function with the import list for snapshot 1"],["generate_import_object_wasix64_v1",""],["get_wasi_version","Detect the version of WASI being used based on the import namespaces."],["get_wasi_versions","Like [`get_wasi_version`] but detects multiple WASI versions in a single module. Thus `strict` behaves differently in this function as multiple versions are always supported. `strict` indicates whether non-WASI imports should trigger a failure or be ignored."],["import_object_for_all_wasi_versions",""],["io_err_into_net_error",""],["is_wasi_module","Check if a provided module is compiled for some version of WASI. Use [`get_wasi_version`] to find out which version of WASI the module is."],["is_wasix_module","Returns if the module is WASIX or not"],["mem_error_to_bus",""],["mem_error_to_wasi",""],["restore_snapshot",""],["rewind",""],["rewind_ext",""],["run_wasi_func",""],["run_wasi_func_start","Run a main function."],["stub_initializer","No-op module initializer."],["unwind",""],["wasi_exports_generic",""],["wasi_snapshot_preview1_exports",""],["wasi_unstable_exports",""],["wasix_exports_32",""],["wasix_exports_64",""]],"mod":[["bin_factory",""],["bindings","WAI based bindings."],["capabilities",""],["fs",""],["http",""],["macros","Macros to simplify some common WASI-specific tasks."],["net",""],["os",""],["rewind",""],["runners",""],["runtime",""],["state","WARNING: the API exposed here is unstable and very experimental.  Certain things are not ready yet and may be broken in patch releases.  If you’re using this and have any specific needs, please let us know here or by filing an issue."],["syscalls",""],["types",""],["utils",""],["wapm",""]],"struct":[["DeepSleepWork","Represents the work that will be done when a thread goes to deep sleep and includes the things needed to restore it again"],["DuplexPipe","A pair of pipes that are connected together."],["Fd",""],["InstanceSnapshot","A snapshot that captures the runtime state of an instance."],["LocalNetworking",""],["LocalTcpListener",""],["LocalTcpStream",""],["LocalUdpSocket",""],["Pipe",""],["RewindState","The rewind state after a deep sleep"],["UnsupportedVirtualNetworking",""],["WasiEnv","The environment provided to the WASI imports."],["WasiEnvBuilder","Builder API for configuring a [`WasiEnv`] environment needed to run WASI modules."],["WasiEnvInit","Data required to construct a [`WasiEnv`]."],["WasiFunctionEnv",""],["WasiInstanceHandles","Various [`TypedFunction`] and [`Global`] handles for an active WASI(X) instance."],["WasiVFork",""]],"trait":[["RewindPostProcess","Trait that will be invoked after the rewind has finished It is possible that the process will be terminated rather than restored at this point"],["VirtualFile","This trait relies on your file closing when it goes out of scope via `Drop`"],["VirtualNetworking","An implementation of virtual networking"],["WasiFile","This trait relies on your file closing when it goes out of scope via `Drop`"]],"type":[["InstanceInitializer",""],["ModuleInitializer",""],["WasiBidirectionalSharedPipePair","Shared version of BidiPipe for situations where you need to emulate the old behaviour of `Pipe` (both send and recv on one channel)."]]};