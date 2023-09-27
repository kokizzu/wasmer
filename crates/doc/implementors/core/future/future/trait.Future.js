(function() {var implementors = {
"virtual_net":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/server/struct.Poller.html\" title=\"struct virtual_net::server::Poller\">Poller</a>"],["impl&lt;'a, 'b, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/struct.Poller.html\" title=\"struct virtual_net::Poller\">Poller</a>&lt;'a, 'b, R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"virtual_net/trait.VirtualConnectionlessSocket.html\" title=\"trait virtual_net::VirtualConnectionlessSocket\">VirtualConnectionlessSocket</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl&lt;'a, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/struct.Poller.html\" title=\"struct virtual_net::Poller\">Poller</a>&lt;'a, R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"virtual_net/trait.VirtualTcpListener.html\" title=\"trait virtual_net::VirtualTcpListener\">VirtualTcpListener</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl&lt;'a, 'b, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/struct.Poller.html\" title=\"struct virtual_net::Poller\">Poller</a>&lt;'a, 'b, R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"virtual_net/trait.VirtualConnectedSocket.html\" title=\"trait virtual_net::VirtualConnectedSocket\">VirtualConnectedSocket</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/client/struct.RemoteNetworkingClientDriver.html\" title=\"struct virtual_net::client::RemoteNetworkingClientDriver\">RemoteNetworkingClientDriver</a>"],["impl&lt;'a, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/struct.Poller.html\" title=\"struct virtual_net::Poller\">Poller</a>&lt;'a, R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"virtual_net/trait.VirtualConnectedSocket.html\" title=\"trait virtual_net::VirtualConnectedSocket\">VirtualConnectedSocket</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/server/struct.RemoteNetworkingServerDriver.html\" title=\"struct virtual_net::server::RemoteNetworkingServerDriver\">RemoteNetworkingServerDriver</a>"],["impl&lt;'a, 'b, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/struct.Poller.html\" title=\"struct virtual_net::Poller\">Poller</a>&lt;'a, 'b, R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"virtual_net/trait.VirtualConnectionlessSocket.html\" title=\"trait virtual_net::VirtualConnectionlessSocket\">VirtualConnectionlessSocket</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl&lt;'a, 'b, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"virtual_net/struct.Poller.html\" title=\"struct virtual_net::Poller\">Poller</a>&lt;'a, 'b, R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"virtual_net/trait.VirtualConnectedSocket.html\" title=\"trait virtual_net::VirtualConnectedSocket\">VirtualConnectedSocket</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"]],
"wasmer_wasix":[["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/net/socket/struct.SocketSender.html\" title=\"struct wasmer_wasix::net::socket::SocketSender\">SocketSender</a>&lt;'a, 'b&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/syscalls/wasix/futex_wait/struct.FutexPoller.html\" title=\"struct wasmer_wasix::syscalls::wasix::futex_wait::FutexPoller\">FutexPoller</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/net/socket/struct.SocketSender.html\" title=\"struct wasmer_wasix::net::socket::SocketSender\">SocketSender</a>&lt;'a, 'b&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/syscalls/wasi/poll_oneoff/struct.PollBatch.html\" title=\"struct wasmer_wasix::syscalls::wasi::poll_oneoff::PollBatch\">PollBatch</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/net/socket/struct.SocketReceiver.html\" title=\"struct wasmer_wasix::net::socket::SocketReceiver\">SocketReceiver</a>&lt;'a, 'b&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/fs/struct.FlushPoller.html\" title=\"struct wasmer_wasix::fs::FlushPoller\">FlushPoller</a>"],["impl&lt;'a, Fut, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/syscalls/struct.Poller.html\" title=\"struct wasmer_wasix::syscalls::Poller\">Poller</a>&lt;'a, Fut, T&gt;<span class=\"where fmt-newline\">where\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"enum\" href=\"wasmer_wasix/types/wasi/enum.Errno.html\" title=\"enum wasmer_wasix::types::wasi::Errno\">Errno</a>&gt;&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/syscalls/struct.InfiniteSleep.html\" title=\"struct wasmer_wasix::syscalls::InfiniteSleep\">InfiniteSleep</a>"],["impl&lt;'a, 'b, 'c, T, Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/syscalls/struct.AsyncifyPoller.html\" title=\"struct wasmer_wasix::syscalls::AsyncifyPoller\">AsyncifyPoller</a>&lt;'a, 'b, 'c, T, Fut&gt;<span class=\"where fmt-newline\">where\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/net/socket/struct.SocketAccepter.html\" title=\"struct wasmer_wasix::net::socket::SocketAccepter\">SocketAccepter</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/syscalls/wasi/fd_read/struct.NotifyPoller.html\" title=\"struct wasmer_wasix::syscalls::wasi::fd_read::NotifyPoller\">NotifyPoller</a>"],["impl&lt;'a, 'b, Fut, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/syscalls/struct.Poller.html\" title=\"struct wasmer_wasix::syscalls::Poller\">Poller</a>&lt;'a, 'b, Fut, T&gt;<span class=\"where fmt-newline\">where\n    Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"enum\" href=\"wasmer_wasix/types/wasi/enum.Errno.html\" title=\"enum wasmer_wasix::types::wasi::Errno\">Errno</a>&gt;&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/fs/inode_guard/struct.InodeValFilePollGuardJoin.html\" title=\"struct wasmer_wasix::fs::inode_guard::InodeValFilePollGuardJoin\">InodeValFilePollGuardJoin</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/net/socket/struct.IndefinitePoll.html\" title=\"struct wasmer_wasix::net::socket::IndefinitePoll\">IndefinitePoll</a>"],["impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"wasmer_wasix/net/socket/struct.SocketReceiver.html\" title=\"struct wasmer_wasix::net::socket::SocketReceiver\">SocketReceiver</a>&lt;'a, 'b&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()